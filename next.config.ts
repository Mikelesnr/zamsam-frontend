import type { NextConfig } from "next";
import dotenv from "dotenv";

dotenv.config(); // ✅ Load .env variables

const apiBase = process.env.API_URL || "http://localhost:8000";
const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${apiBase}/:path*`,
      },
    ];
  },
};

export default nextConfig;
