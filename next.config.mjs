/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
        },
    },
    images: {
        domains: ['i.pinimg.com', 'i.makeagif.com', 'firebasestorage.googleapis.com'],
    },
}

export default nextConfig 
