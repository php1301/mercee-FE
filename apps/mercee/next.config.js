/* eslint-disable @typescript-eslint/no-var-requires */
const withNx = require('@nrwl/next/plugins/with-nx');

// module.exports = withNx({});


const { withPlugins } = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

// next.js configuration
const nextConfig = {};

module.exports = withPlugins([withOptimizedImages, withNx], nextConfig);