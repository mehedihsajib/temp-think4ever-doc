import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/docs",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs/introduction",
        basePath: false,
        permanent: false,
      },
      {
        source: "/",
        destination: "/introduction",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
