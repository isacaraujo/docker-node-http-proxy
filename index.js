const httpProxy = require('http-proxy');

const originUrl = process.env.ORIGIN_URL;

const proxyServer = httpProxy.createProxyServer({
  target: originUrl,
  changeOrigin: true
});

proxyServer.listen(3000, () => {
  console.log('Start listen on 3000');
});

setupGracefulShutdown(proxyServer);

function setupGracefulShutdown(httpServer)  {
  process.on('SIGHUP', () => {
    console.log('SIGHUP!');
    httpServer.close(() => {
      console.log('server closed');
      process.exit(128 + 1);
    });
  });

  process.on('SIGINT', () => {
    console.log('SIGINT!');
    httpServer.close(() => {
      console.log('server closed');
      process.exit(128 + 2);
    });
  });

  process.on('SIGTERM', () => {
    console.log('SIGTERM');
    httpServer.close(() => {
      console.log('server closed');
      process.exit(128 + 15);
    });
  });
}
