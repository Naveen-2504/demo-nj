const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome");
  } else if (req.url === "/about") {
    res.end("hi your about");
  } else {
    res.end(`<p>hi</p> <a href="/">go back</a>`);
  }
});

server.listen(5001);
