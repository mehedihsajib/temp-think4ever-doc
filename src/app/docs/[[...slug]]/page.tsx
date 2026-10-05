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

const components = {
  img: (props: any) => (
    <span className="block mt-8 mb-8 rounded-xl overflow-hidden border border-border shadow-sm">
      {/* We use unoptimized width/height fallback, but next/image works best when we provide dimensions or use fill. 
          For MDX without dimensions, an easy way is layout="responsive" with a wrapper, 
          or simpler: standard img tag with Next.js optimization logic using custom loader or just letting standard img apply. 
          To use next/image properly without known width/height, we need sizes="100vw" style={{ width: '100%', height: 'auto' }} 
      */}
      <Image 
        src={props.src} 
        alt={props.alt || "Documentation Image"} 
        width={1200}
        height={800}
        className="w-full h-auto object-cover"
      />
    </span>
  ),
};

export default async function DocsPage({ params }: DocsPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || ["introduction"];
  const filePath = path.join(process.cwd(), "src/content", `${slug.join("/")}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf-8");

  return (
    <div className="w-full">
      <MDXRemote source={source} components={components} />
    </div>
  );
}

export function generateStaticParams() {
  return [
    { slug: ["introduction"] },
  ];
}
