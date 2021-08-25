//03-npm.js
//nodejs => Modules natifs dispo par defaut + la communauté qui a dévélopper le npm
//NPM : Node Package Manager : c'est comme le CDN de bootstrap pour télécharger du js
//Dispo sur npmjs.com
//commande :  npm --version
//pour installer une librairie : npm install nomLib ou npm i nomLib
//faire la mise à jour npm
// si on s'est trompé de version on fait  npm init --y dans le dossier en question

//npm i module => télécharge en local (dans le dossier en cours et le projet en cours uniquement)
//npm i -g module  => télécharge en global (dans le dossier node et sur plusieur projet )
//npm i -g -D module  => télécharge en global (dans le dossier node et sur plusieur projet )
//npm un module  (un ou unistall) pour supprimer
//npm un -g module
//npm un  -D module
//npm init pour creer un fichier package.json
const express = require("express");
const server = express();
server.get("/", (req, res) => {
  res.send("je viens de creer un serveur express");
});
server.listen(4003, () => {
  console.log("Le serveur est bien démarré");
});

//utiliser l'utilitaire nodemon pour arreter le serveur 