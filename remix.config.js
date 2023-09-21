/** @type {import('@remix-run/dev').AppConfig} */
const loadRehypeShiki = require('./config/rehype-shiki.js');

module.exports = {
  serverBuildTarget: 'vercel',
  // When running locally in development mode, we use the built in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "api/index.js",
  // publicPath: "/build/",
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
