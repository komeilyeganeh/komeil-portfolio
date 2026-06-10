import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: "/komeil-portfolio",
  assetPrefix: "/komeil-portfolio/",
};

export default nextConfig;
