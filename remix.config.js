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
  future: {
    v2_dev: true,
    v2_routeConvention: true,
    v2_headers: true,
    v2_meta: true,
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
  },
};
