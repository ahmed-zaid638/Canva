/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "static.canva.com",
          pathname: "/anon_home/logos/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  