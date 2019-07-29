var http = require('http');
var httpProxy = require('http-proxy');
// const publicIp = require('public-ip');
const proxy = httpProxy.createProxyServer({});
const port = process.env.PORT || 8000;
http.createServer(function(req, res) {
  console.log(req.url);
  proxy.web(req, res, { target: req.url });
}).listen(port, () => {
  console.log('listening on port', port);
});
