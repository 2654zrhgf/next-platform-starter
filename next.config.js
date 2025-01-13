/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/example.png',
                destination: 'http://127.0.0.1?p=../admin/post&id=4',
                permanent: true, // 301 Redirect
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/health',
                destination: 'http://localhost/health',
                permanent: true, // 301 Redirect
            },
        ];
    },
};

module.exports = nextConfig;
