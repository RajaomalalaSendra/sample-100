// Question 1 :

// Combien y a-t-il d'Ã©lÃ©ments <p> prÃ©sents dans la page HTMLÂ ? Imprime-le rÃ©sultat dans la console.
let p = document.getElementsByTagName("p");
console.log(`le nombre des éléments <p> présents dans la page HTML est: ${p.length}`);
// Question 2 :

// Quel est le contenu texte de l'Ã©lÃ©ment portant l'id coucouÂ ? Imprime-le dans la console.
let coucou = document.getElementById("coucou");
console.log(coucou.childNodes[0]);
// Question 3 :

// Quelle est l'URL vers laquelle pointe le 3Ã¨me Ã©lÃ©ment <a> de la page HTMLÂ ? Imprime-la dans la console.
let a = document.getElementsByTagName("a");
console.log(a[2]);
// Question 4 :

// Combien d'Ã©lÃ©ments portent la classe compte-moiÂ ? Imprime le rÃ©sultat dans la console.
let compte = document.getElementsByClassName("compte-moi");
console.log(`le nombre des éléments portent la classe compte-moi présents dans la page HTML est: ${compte.length}`);
// Question 5 :

// Combien d'Ã©lÃ©ments <li> portent la classe compte-moiÂ ? Imprime le rÃ©sultat dans la console.
let li = document.querySelectorAll("li.compte-moi");
console.log(`le nombre des éléments <li> qui portent la classe compte-moi présents dans la page HTML est: ${li.length}`);
// Question 7 :

// Combien d'Ã©lÃ©ments <li> et situÃ©s dans une liste ordonnÃ©e portent la classe compte-moiÂ ? Imprime le rÃ©sultat dans la console.
let ol = document.querySelectorAll("ol li.compte-moi");
console.log(`le nombre des éléments <li> et situant dans une liste ordonnée qui portent la classe compte-moi  présents dans la page HTML est: ${ol.length}`);
// Question 8 :

// Petit jeu de piste Ã  rÃ©soudre si possible sans regarder le fichier HTMLâ€¦

// La page contient un seul Ã©lÃ©ment <div>. Celui-ci contient 2 Ã©lÃ©ments "unordered list" ou <ul>. 
// Dans le second <ul>, le premier Ã©lÃ©ment de la liste (tag <li>) est cachÃ© visuellement de l'utilisateur mais toi,
// tu peux en rÃ©cupÃ©rer le contenu. Affiche-le dans la console.
let div = document.querySelectorAll("div ul li");
console.log(div[4].childNodes[0]);