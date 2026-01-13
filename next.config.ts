import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost/**",
      },
      {
        hostname: "192.168.1.6/**",
      },
      {
        hostname: "0.0.0.0/**",
      },
      {
        hostname: "192.168.1.5/**",
      },
      {
        hostname: "api.matrilhas.com.br/**",
      },
    ],
  },
};

export default nextConfig;
