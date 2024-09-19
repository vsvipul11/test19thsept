// next.config.mjs
export const nextConfig = {
  // Remove the output: 'export' configuration
  // Set custom directory for build output
  distDir: 'build',
  
  // TypeScript configuration
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
};

// Export the configuration object directly
export default nextConfig;
