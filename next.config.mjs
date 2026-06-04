/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow GSAP, Lenis, Framer Motion to work (they use browser APIs)
  reactStrictMode: true,
  // Trailing slash for clean URLs
  trailingSlash: false,
};

export default nextConfig;
