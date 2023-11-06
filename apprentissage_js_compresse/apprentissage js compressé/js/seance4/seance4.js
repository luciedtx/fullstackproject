// console.log(document);
// console.log(window);^

let paragraphe1 = document.getElementById("premier_paragraphe")
paragraphe1.innerText = "<h2>Mon nouveau contenu</h2>"
// On a ici prit l'id en lien avec le paragraphe pour changer ce qui se trouve dans le pragraphe en html
// innerText permet de prendre en compte AUSSI les balises html
// paragraphe1.innerHTML = "<h2>Mon nouveau contenu</h2>"
// La commande innerHTML me permet de changer les éléments de texte.

let paragraphe2 = document.getElementsByClassName("gras")
console.log(paragraphe2);

paragraphe2[0].innerHTML="<h2>Mon deuxième paragraphe</h2>"

// Si on voulait prendre tous les éléments du tableau
// for (let valeur  of paragraphe2){
//     valeur.innerHTML="<h2>Mon deuxième paragraphe</h2>"
// }

//récupérer un élément grâce à sa balise
let paragraphe3 = document.getElementsByTagName("p")
paragraphe3[2].innerHTML = "<h2>Mon troisième paragraphe</h2>"

// querySelector avec entre parenthèse le même chemin d'accès qu'en CSS
let monTitre=document.querySelector("h1")
monTitre.innerHTML="titre principal"

// querySelectorAll
let paragraphe4=document.querySelectorAll("p")
paragraphe4[3].innerHTML="<h2>Mon quatrième paragraphe</h2>"
paragraphe4[3].style.backgroundColor="#ff2396"

// Récupérer un attribut

let attribut = document.querySelector("a")
attribut.getAttribute("href")
// alert(attribut.getAttribute("href"))

attribut.setAttribute("href", "http://www.facebook.fr")
attribut.setAttribute("target", "_blank")

//Si on veut ajouter une class à un endroit en particulier
paragraphe2[0].classList.add("vert")

// Si on veut enlever une class à un endroit on a la commande
// paragraphe2[0].classList.remove("gras")



// COMMENT FAIRE UN EVENEMENT

paragraphe1.addEventListener('click', function(){
    paragraphe1.classList.toggle("fondRouge")
})


let lien2 = document.querySelectorAll("a")[1]
lien2.addEventListener("click", function(evenement){
    evenement.preventDefault()
    console.log("bonjour");
})




// QUESTION DJAY NTHSTYLE