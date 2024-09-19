// next.config.mjs
export const nextConfig = {
  // Set custom directory for build output
  distDir: 'build',
  
  // Add the output: 'export' configuration
  output: 'export',
  
  // TypeScript configuration
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
};

// Export the configuration object directly
export default nextConfig;
