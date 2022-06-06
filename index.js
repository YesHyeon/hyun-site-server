//Common JS 문법
var http = require("http");
var hostname = "127.0.0.1";
var port = 8080;

const server = http.createServer(function (req, res) {
  const path = req.url;
  const method = req.method;
  if (path === "/products") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      const products = JSON.stringify([{ name: "농구공", price: 5000 }]);
      // end 함수의 첫번째 인자에는 string값이 들어가야함
      res.end(products);
    } else if (method === "POST") {
      res.end("생성 되었습니다.");
    }
  }
});

server.listen(port, hostname);

console.log("grab market server on");
