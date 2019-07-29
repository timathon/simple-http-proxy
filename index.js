const httpProxy = require('http-proxy');
const port = process.env.PORT || 8000;
httpProxy
  .createServer(80, 'some-target.com')
  .listen(port, () => {
    console.log('listening on port', port);
  });
