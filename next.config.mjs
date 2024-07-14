/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.pexels.com']
    },
    redirects:async()=> {
        return [
            {
                source: '/redirection',
                destination: '/about',
                permanent: false,
            },
        ]
    }
};

export default nextConfig;
