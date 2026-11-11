import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: "exam-app.elevate-bootcamp.cloud",
        protocol: "https",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
