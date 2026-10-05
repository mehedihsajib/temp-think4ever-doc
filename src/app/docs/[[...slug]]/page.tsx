import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import remarkGfm from "remark-gfm";

interface DocsPageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

function textContent(node: any): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(textContent).join("");
  if (node && typeof node === "object" && node.props && node.props.children) {
    return textContent(node.props.children);
  }
  return "";
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

import { DocImage } from "@/components/ui/DocImage";
import { Callout } from "@/components/ui/Callout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { YouTube } from "@/components/ui/YouTube";

const components = {
  h1: ({ children, ...props }: any) => {
    const id = slugify(textContent(children));
    return (
      <h1 id={id} className="scroll-mt-24" {...props}>
        {children}
      </h1>
    );
  },
  h2: ({ children, ...props }: any) => {
    const id = slugify(textContent(children));
    return (
      <h2 id={id} className="scroll-mt-24 group flex items-center" {...props}>
        <span>{children}</span>
        <a
          href={`#${id}`}
          className="ml-2 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-blue-600"
          aria-label="Link to section"
        >
          #
        </a>
      </h2>
    );
  },
  h3: ({ children, ...props }: any) => {
    const id = slugify(textContent(children));
    return (
      <h3 id={id} className="scroll-mt-24 group flex items-center" {...props}>
        <span>{children}</span>
        <a
          href={`#${id}`}
          className="ml-2 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-blue-600"
          aria-label="Link to section"
        >
          #
        </a>
      </h3>
    );
  },
  img: DocImage,
  Callout,
  Note: (props: any) => <Callout type="note" {...props} />,
  Important: (props: any) => <Callout type="important" {...props} />,
  Warning: (props: any) => <Callout type="warning" {...props} />,
  Tip: (props: any) => <Callout type="tip" {...props} />,
  YouTube,
  pre: CodeBlock,
  code: ({ children, className, ...props }: any) => {
    if (className?.includes("language-")) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
    return (
      <code
        className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-800 font-mono text-[13px] font-medium border border-slate-200/80"
        {...props}
      >
        {children}
      </code>
    );
  },
  table: ({ children, ...props }: any) => (
    <div className="my-6 w-full overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
      <table
        className="mt-0 mb-0 w-full text-left text-sm border-collapse"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: any) => (
    <thead
      className="bg-slate-50/90 border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-700"
      {...props}
    >
      {children}
    </thead>
  ),
  th: ({ children, ...props }: any) => (
    <th className="px-5 py-3 font-semibold text-slate-700" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: any) => (
    <td
      className="px-5 py-3.5 border-b border-slate-100 text-slate-600 align-top text-sm leading-relaxed"
      {...props}
    >
      {children}
    </td>
  ),
  tr: ({ children, ...props }: any) => (
    <tr
      className="hover:bg-slate-50/60 transition-colors last:border-b-0"
      {...props}
    >
      {children}
    </tr>
  ),
  blockquote: ({ children, ...props }: any) => {
    const text = textContent(children).trim();
    if (text.startsWith("[!NOTE]") || text.toLowerCase().startsWith("note:")) {
      return <Callout type="note">{children}</Callout>;
    }
    if (
      text.startsWith("[!WARNING]") ||
      text.toLowerCase().startsWith("warning:")
    ) {
      return <Callout type="warning">{children}</Callout>;
    }
    if (
      text.startsWith("[!IMPORTANT]") ||
      text.toLowerCase().startsWith("important:")
    ) {
      return <Callout type="important">{children}</Callout>;
    }
    if (text.startsWith("[!TIP]") || text.toLowerCase().startsWith("tip:")) {
      return <Callout type="tip">{children}</Callout>;
    }
    return (
      <blockquote
        className="my-4 border-l-4 border-slate-300 pl-4 italic text-slate-600"
        {...props}
      >
        {children}
      </blockquote>
    );
  },
};

import { OnThisPage, HeadingItem } from "@/components/layout/OnThisPage";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export default async function DocsPage({ params }: DocsPageProps) {
  const resolvedParams = await params;
  let slug = resolvedParams.slug || ["introduction"];

  // If navigating to /docs/dev -> redirect to /docs/dev/developer_mode
  if (slug.length === 1 && slug[0] === "dev") {
    redirect("/docs/dev/developer_mode");
  }

  // If navigating to legacy /docs/manual_* -> redirect to /docs/*
  if (slug.length === 1 && slug[0].startsWith("manual_")) {
    redirect(`/docs/${slug[0].replace(/^manual_/, "")}`);
  }

  // Resolve file in src/content
  let filePath = path.join(
    process.cwd(),
    "src/content",
    `${slug.join("/")}.mdx`,
  );

  // Fallback checks for designer / root paths
  if (!fs.existsSync(filePath)) {
    const designerPath = path.join(
      process.cwd(),
      "src/content",
      "designer",
      `${slug.join("/")}.mdx`,
    );
    if (fs.existsSync(designerPath)) {
      filePath = designerPath;
    }
  }

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf-8");

  // Extract top-level headings directly from MDX source for SSR table of contents
  const headingLines = source.match(/^##\s+(.*)$/gm) || [];
  const headings: HeadingItem[] = headingLines.map((line) => {
    const rawTitle = line
      .replace(/^##\s+/, "")
      .replace(/[*_`]/g, "")
      .trim();
    const id = slugify(rawTitle);
    return {
      id,
      title: rawTitle,
      level: 2,
    };
  });

  const currentPath = `/docs/${slug.join("/")}`;

  return (
    <div className="flex w-full gap-8 items-start">
      <div className="min-w-0 flex-1">
        <Breadcrumb customPath={currentPath} />
        <MDXRemote
          source={source}
          components={components}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </div>
      <OnThisPage initialHeadings={headings} />
    </div>
  );
}

export function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "src/content");
  const params: { slug: string[] }[] = [];

  function scanDir(dir: string) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanDir(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
        const rel = path.relative(contentDir, fullPath).replace(/\.mdx$/, "");
        params.push({ slug: rel.split(path.sep) });
      }
    }
  }

  scanDir(contentDir);

  // Also include default introduction if not scanned
  if (!params.some((p) => p.slug.join("/") === "introduction")) {
    params.push({ slug: ["introduction"] });
  }

  return params;
}
