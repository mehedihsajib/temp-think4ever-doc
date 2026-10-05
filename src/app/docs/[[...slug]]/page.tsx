import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";

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
  img: (props: any) => (
    <span className="block my-1 rounded-xl overflow-hidden border border-border shadow-sm">
      <Image
        src={props.src}
        alt={props.alt || "Documentation Image"}
        width={1200}
        height={800}
        className="w-full h-auto object-cover block"
      />
    </span>
  ),
};

import { OnThisPage, HeadingItem } from "@/components/layout/OnThisPage";

export default async function DocsPage({ params }: DocsPageProps) {
  const resolvedParams = await params;
  let slug = resolvedParams.slug || ["introduction"];

  // If navigating to /docs/dev -> redirect to /docs/dev/developer_mode
  if (slug.length === 1 && slug[0] === "dev") {
    redirect("/docs/dev/developer_mode");
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

  return (
    <div className="flex w-full gap-8 items-start">
      <div className="min-w-0 flex-1">
        <MDXRemote source={source} components={components} />
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
