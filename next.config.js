/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "i.annihil.us",
      },
    ],
  },
  env: {
    TS: process.env.TS,
    APIKEY: process.env.APIKEY,
    HASH: process.env.HAS,
  },
};

module.exports = nextConfig;
