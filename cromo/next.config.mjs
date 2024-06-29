/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    headers: async () => {
      return [
        {
          source: '/api/set-cookie',
          headers: [
            { key: 'Content-Type', value: 'application/json' },
            { key: 'Cache-Control', value: 'no-store' },
          ],
        },
      ];
    },
    async rewrites() {
      return [
        {
          source: '/form/PassoUm',
          destination: '/form/PassoUm/page.tsx',
        },
      ];
    },
  };
  
  export default nextConfig;
