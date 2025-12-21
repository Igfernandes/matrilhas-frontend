import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost/**",
      },
      {
        hostname: "192.168.1.5/**"
      },
      {
        hostname: "192.168.1.2/**"
      }, 
      {
        hostname: "192.168.1.3/**"
      },
      {
        hostname: "192.168.1.4/**"
      },
    ],
  },
};

export default nextConfig;
