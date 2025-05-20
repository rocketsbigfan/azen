import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',
  basePath: process.env.BASE,
  reactStrictMode: false,
  // images: {
  //   unoptimized: true,
  // }
};

export default nextConfig;
