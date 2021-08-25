const express = require("express");
const server = express();
const fs = require("fs");

server.get("/", (req, res) => {
  fs.readFile("./02-data.json", "utf-8", (err, msg) => {
    res.send(msg);
  });
});
server.listen(5320, () => {
  console.log("Le serveur est bien démarré");
});
