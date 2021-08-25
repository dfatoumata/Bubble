const fs = require("fs"); //charger le module natif de fs 
console.log(fs);
let i = 0;
for (const prop in fs) {
    i++
}
console.log(i);
fs.writeFile("./12-exemple.html", `<h1>Coucou</h1>`, function () {
    console.log("le fichier est creer ");
})