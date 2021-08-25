let phrase = "Bonjour les amis";
phrase.toUpperCase()
function traitementPhrase(maPhrase) {
    let phrase1 = maPhrase.split(" ")
    let phrase2 = phrase1.map(mot => {
        return mot[0].toUpperCase() + mot.substring(1)
    }).join(" ");
    return phrase2;
};
console.log(traitementPhrase(phrase));