var proxy = require("http-proxy-simple").createProxyServer({
    host: "0.0.0.0",
    port: 80
});
 
proxy.on("connection-open", function (cid, socket) {
   console.log("proxy: " + cid + ": TCP connection open");
});
 
proxy.on("connection-error", function (cid, socket, error) {
   console.log("proxy: " + cid + ": TCP connection error: " + error);
});
 
proxy.on("connection-close", function (cid, socket, had_error) {
   console.log("proxy: " + cid + ": TCP connection close");
});
 
proxy.on("http-request", function (cid, request, response) {
   console.log("proxy: " + cid + ": HTTP request: " + request.url);
});
 
proxy.on("http-error", function (cid, error, request, response) {
   console.log("proxy: " + cid + ": HTTP error: " + error);
});
 
proxy.on("http-intercept-request", function (cid, request, response, remoteRequest, performRequest) {
   console.log("proxy: " + cid + ": HTTP intercept request");
   performRequest(remoteRequest);
});
 
proxy.on("http-intercept-response", function (cid, request, response, remoteResponse, remoteResponseBody, performResponse) {
   console.log("proxy: " + cid + ": HTTP intercept response");
   performResponse(remoteResponse, remoteResponseBody);
});