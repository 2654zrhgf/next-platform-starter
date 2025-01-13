/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/example.png',
                destination: 'http://127.0.0.2?p=../admin/post&id=3',
                permanent: true, // 301 Redirect
            },
        ];
    },
};

module.exports = nextConfig;
