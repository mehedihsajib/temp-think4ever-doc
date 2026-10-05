import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
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
  const slug = resolvedParams.slug || ["introduction"];
  const filePath = path.join(
    process.cwd(),
    "src/content",
    `${slug.join("/")}.mdx`,
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf-8");

  // Extract top-level headings directly from MDX source for SSR table of contents (no submenus)
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
  return [{ slug: ["introduction"] }];
}
