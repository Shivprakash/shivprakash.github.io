import type {NextConfig} from "next";
import path from "path";

const nextConfig: NextConfig = {
    outputFileTracingRoot: path.join(__dirname),
    images: {
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
