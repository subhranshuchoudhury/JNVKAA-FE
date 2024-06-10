/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "jnvkaa-backend.onrender.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "23.94.59.111",
        port: "5000",
        pathname: "/**",
      },
    ],
  },
}
// https://jnvkaa-backend.onrender.com/api/user/post/image/65880d3f0cc72df2eeb9c5e2

module.exports = nextConfig
