const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./views/index.html", (err, html) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      return;
    });
  }
  if (req.url === "/about") {
    fs.readFile("./views/about.html", (err, html) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      return;
    });
    return;
  }
  if (req.url === "/contact-me") {
    fs.readFile("./views/contact-me.html", (err, html) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      return;
    });
    return;
  }
  fs.readFile("./views/404.html", (err, html) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(html);
    return;
  });
  return;
});

server.listen(8080);
