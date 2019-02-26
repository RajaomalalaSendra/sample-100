// Modification n°1

// Écris une fonction changeTitles() qui va :

//     Pointer vers le titre en haut de page ("Album Example") et le changer en "Ce que j'ai appris à THP"
//     Pointer vers le sous-titre ("Something short and leading about…") et le changer en "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
function changeTitles() {
    let title = document.getElementsByTagName("h1");
    let subtitle = document.querySelectorAll("p.lead.text-muted");
    console.log(title[0].innerHTML =  "Ce que j'ai appris à THP");
    console.log(subtitle[0].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !");
}
changeTitles();
// Pour cette fonction comme toutes les suivantes : exécute la fonction dans ton code JS en l'appelant en bas avec un changeTitles();. Dès que tu fais une modification sur la fonction, rafraîchis la page HTML dans ton navigateur pour voir si la modification apportée est OK.
// Modification n°2

// Ecris une fonction changeCallToActions() qui va:

//     Changer le texte du bouton "Main call to action" en "OK je veux tester !"
//     Ajouter l'URL (un href) vers laquelle le bouton "Main call to action" va pointer : "http://www.thehackingproject.org"
//     Changer le texte du bouton "Secondary action" en "Non Merci"
//     Ajouter l'URL vers laquelle le bouton "Secondary action" va pointer : "https://www.pole-emploi.fr/accueil/"
function changeCallToActions() {
    let buton = document.querySelectorAll("a.btn.btn-primary.my-2");
    console.log(buton[0].innerHTML = "OK je veux tester !");
    console.log(buton[0].href = "https://www.thehackingproject.org");
    let buton_secondary = document.querySelectorAll("a.btn.btn-secondary.my-2");
    console.log(buton_secondary[0].innerHTML = "Non Merci");
    console.log(buton_secondary[0].href = "https://www.pole-emploi.fr/accueil/");
}
changeCallToActions();
// Modification n°3

// Écris une fonction changeLogoName() qui va modifier le titre "Album" de la navbar (en haut à gauche) de la façon suivante :

//     Change "Album" par "The THP Experience" ;
//     Change la taille du texte pour le passer en 2em.
function changeLogoName() {
        let logo = document.getElementsByTagName("strong");
        console.log(logo[0].innerHTML = "The THP Experience");
        console.log(logo[0].style.fontSize = "2em");
}
changeLogoName();
// Modification n°4

// Écris une fonction populateImages() qui va ajouter, dans chacune des 9 cards, une image dont l'URL est contenue dans l'array suivant :

// let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

// Une petite boucle des familles va être utile ici.
function populateImages() {
    let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
    let image = document.querySelectorAll("img.card-img-top");
    for (var i = 0; i < image.length; i++) {
        console.log(image[i].src = imagesArray[i]);
    }   
}
populateImages();
// Modification n°5

// Écris une fonction deleteLastCards() qui va supprimer les 3 dernières cards via une boucle. Je donne ci-dessous 2 coups de main sur cette modification : les plus à l'aise peuvent essayer de ne pas les lire.
// Coups de main sur cette modif

// Pour les lire, surligne le texte ci-dessous en le sélectionnant (c'est écrit blanc sur blanc 😏 )

//     Attention si ta boucle supprime des éléments d'une liste : cela peut modifier les indices des éléments. Illustration : si tu supprimes le 7ème élément d'une liste de 9, l'élément numéro 8 passe alors au numéro 7 et le numéro 9 passe au numéro 8. Ça peut faire foirer ta boucle 🤭
//     https://developer.mozilla.org/fr/docs/Web/API/ChildNode/remove 😘
function deleteLastCards() {
    let colMd = document.getElementsByClassName("card mb-4 box-shadow");
    for (var i = 0; i < colMd.length; i++) {
        if (i === 6) { 
                colMd[i].remove();
                colMd[i].remove();
                colMd[i].remove();
        }  
    }
    console.log(colMd);
}
deleteLastCards();
// Modification n°6

// Écris une fonction changeCardsText() qui va modifier le texte des 3 premières cards et le remplacer avec cela :

//     Carte HTML : "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
//     Carte CSS : "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
//     Carte JS : "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."

// Essaye de mettre ça dans une boucle.
var text =["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype." ];
var temporary = 0;
function changeCardsText() {
    let cardText = document.getElementsByClassName("card-text");
    while (temporary < 3) {
        cardText[temporary].innerHTML = text[temporary];
        temporary++;
    } 
}
changeCardsText();
// Modification n°7

// Écris une fonction changeViewButtons() qui va modifier tous les boutons "View" des cards pour les passer en vert. En gros il faut leur mettre la classe btn-success et enlever btn-outline-secondary. Les boutons Edit ne doivent pas changer. Évite bien sûr de faire les 6 modifications une à une ... faut de la boucle là !
// Modification n°7

// Allez, on finit sur une modification un peu tordue :

//     Rajoute une <div> portant la classe row juste après celle qui contient déjà les cards actuelle.
//     Déplace la 6ème card de la première <div class="row"> vers la deuxième que tu viens de créer.
function changeViewButtons() {
    let the_view = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
    for (var i = 0; i < the_view.length; i++) {
                the_view[i].className = "btn btn-success";
    }
    let div = document.createElement("div");
    div.className = "row";
    let container = document.createElement("div");
    container.className = "container";
    let node = document.getElementsByClassName("col-md-4")[5];
    let first = document.getElementsByClassName("row")[1];
    first.appendChild(container);
    container.appendChild(div);
    div.appendChild(node);
}
changeViewButtons();


// Elle est pas belle cette pyramide inversée en front 👳? (comment ça "obsédés par les pyramides" ?). 