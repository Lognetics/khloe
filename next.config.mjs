/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Old brand-positioning routes → new GTM structure
  async redirects() {
    return [
      { source: "/positioning-lab", destination: "/field-notes", permanent: true },
      { source: "/services", destination: "/work-with-me", permanent: true },
      { source: "/contact", destination: "/work-with-me", permanent: true },
      { source: "/case-studies", destination: "/field-notes", permanent: true },
      { source: "/speaking", destination: "/about", permanent: true },
      { source: "/testimonials", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
