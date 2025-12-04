import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost/**",
      },
      {
        hostname: "api.agmturismomarica.com.br/**",
      },{
        hostname: "192.168.1.4"
      }
    ],
  },
};

export default nextConfig;
