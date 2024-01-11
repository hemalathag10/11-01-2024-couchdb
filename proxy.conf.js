const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:5984',  // Replace with your CouchDB URL
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',  // Remove '/api' prefix when forwarding the request to CouchDB
    },
    logLevel: 'debug',  // Set to 'debug' for additional logging
  }));
};
