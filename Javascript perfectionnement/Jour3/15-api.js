const fs = require("fs")
const http = require("http")
let server = http.createServer()
server.on("request", function (req, res) {
    fs.readFile("./15-data.json", "utf8", function (err, msg) {
        res.write(msg)
        console.log("Appelé");

        res.end()
    })
})
server.listen("4001", "192.168.1.72", function () {
    console.log("le serveur est démarré");
})