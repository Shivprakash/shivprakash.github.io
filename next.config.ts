import type {NextConfig} from "next";
import path from "path";

const nextConfig: NextConfig = {
    // Required for GitHub Pages static export
    output: 'export',
    // GitHub Pages repo name will be the base path
    basePath: process.env.NODE_ENV === 'production' ? '' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
    outputFileTracingRoot: path.join(__dirname),
    images: {
        unoptimized: true, // Required for static export
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            }
        ]
    },
    webpack: (config) => {
        // Ignore cytoscape to prevent build errors
        config.resolve.alias = {
            ...config.resolve.alias,
            'cytoscape': false,
        };
        return config;
    },
};

export default nextConfig;
