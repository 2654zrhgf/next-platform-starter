/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/example.png',
                destination: 'https://google.com',
                permanent: true, // 301 Redirect
            },
        ];
    },
};

module.exports = nextConfig;
