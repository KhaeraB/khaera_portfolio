const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  scope: "/app",
  skipWaiting: true,
  runtimeCaching,
  sw: "service-worker.js",
  disable: process.env.NODE_ENV !== "production",
});

const nextConfig = withPWA({
  images: {
    domains: ["images.pexels.com", "avatars.githubusercontent.com"],
  },
  reactStrictMode: true,
});
module.exports = nextConfig;
