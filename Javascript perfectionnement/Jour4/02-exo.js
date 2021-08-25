const http = require("http");
const fs = require("fs");
let server = http.createServer();
server.on("request", (req, res) => {
  fs.readFile("./02-data.json", "utf-8", (err, msg) => {
    res.setHeader("Content-Type", "application/json");
    res.write(msg);
    res.end();
  });
});
server.listen("4002", "localhost", () => {
  console.log("le serveur est démarré");
});
