const http = require("http")
console.log(http)
const server = http.createServer();
server.on("request", function (requete, response) {
    console.log("je viens d'etre appelé");
})
// server.listen("4000", "localhost", function () {
//     console.log("le serveur est bien démarré sur le port 4000");
// })
// server.listen("4000", "192.168.148.17", function () {
//     console.log("le serveur est bien démarré sur le port 4000");
// })
server.listen("4000", "192.168.1.72", function () {
    console.log("le serveur est bien démarré sur le port 4000");
})
