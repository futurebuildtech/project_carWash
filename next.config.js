/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};


const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swMinify: true,
  disable: process.env.NODE_NODE === "development",
});

module.exports = nextConfig;
