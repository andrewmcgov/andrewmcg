/** @type {import('@remix-run/dev').AppConfig} */
const loadRehypeShiki = require('./config/rehype-shiki.js');

module.exports = {
  // These values are for deploying to vercel
  publicPath: '/build/', // default value, can be removed
  serverBuildPath: 'api/index.js',
  serverMainFields: ['main', 'module'], // default value, can be removed
  serverMinify: false, // default value, can be removed
  serverModuleFormat: 'cjs', // default value, can be removed
  serverPlatform: 'node', // default value, can be removed
  assetsBuildDirectory: 'public/build',
  tailwind: true,
  // When running locally in development mode, we use the built in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  ignoredRouteFiles: ['**/.*'],
  serverDependenciesToBundle: ['unist-util-visit'],
  mdx: async (filename) => {
    const rehypeShiki = await loadRehypeShiki();

    const shikiWithOptions = () =>
      rehypeShiki({theme: 'material-theme-palenight'});

    return {
      rehypePlugins: [shikiWithOptions],
    };
  },
};
