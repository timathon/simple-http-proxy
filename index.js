var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
const port = process.env.PORT || 8000;
http.createServer(function(req, res) {
    proxy.web(req, res, { target: req.url });
}).listen(port, () => {
  console.log('listening on port', port);
});
