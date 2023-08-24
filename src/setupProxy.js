const {createProxyMiddleware} = require('http-proxy-middleware');

const host = 'http://localhost:8888/';

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/insight', {
      target: host,
      changeOrigin: true,
      secure: false,
    })
  );
};
