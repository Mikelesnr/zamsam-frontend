import type { NextConfig } from "next";
import dotenv from "dotenv";

dotenv.config(); // ✅ Load .env variables

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.API_URL}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
