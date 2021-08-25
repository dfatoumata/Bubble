let a = [1, 2, 3]
console.log(a);
let main_html = `<p></p>`; // oui 

// écrire QUE du javascript (pas de html ou de css)

// <p></p> NON
/**
 * p{
 *  font-size : 20px
 * }
 * NON PLUS
 */

// toutes les variables / fonctions 
// sont GLOBALES 

// ça peut poser des problèmes sur le nommage des variables / fonctions 

// première solution
// renommer toutes les variables 
// mettre un prefix ( wordpress )

let main_titre = "titre de la page";


// IIFE 
// Immediately Invoked Function Expression
// fonction anonyme auto exécutante 
// fonction que l'on déclare et qui s'exécute

// déclare la fonction
let main = function () {
    console.log("je suis la fonction");
};

//exécute 
main();

// IIFE
// ()()
// (fonction anonyme)()
(function () {
    let a = "bonjour";
    console.log("je suis une IIFE");
})();

// déclarer et exécuter en même temps une fonction

// google analytics => script fournit par Google
// code javascript que l'on doit nos page 
// permet de suivre l'activité de notre site 
// combien d'internaute / jour 
// le temps passé 
// page visité ....
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');


// il est possible d'envoyer des données vers les IIFE

// il est possible de créer des variables dans les IIFE et des les rendre

(function () {
    // dédié récupérer la balise de données
    let data = [2, 3, 4];
    window.data = data; // ajouter la valeur dans l'objet global window => 
    // la propriété est accessible partout
})();

let r = {
    prenom: "John"
};

// Uncaught TypeError: ({prenom:"John"}) is not a function

(function () {
    // page d'accueil
    console.log("afficher la page d'accueil du site");
    console.log(window.data);
})();


// site web // application web 
// tout est public 

// TOUTE ce qui permet de générer UI accès 
// cookie => tu ne sais pas comment Google 
// arrive a générer ce texte ET comment il le traite 
// petit minifier / uglify / salir => code production

// nodejs 
