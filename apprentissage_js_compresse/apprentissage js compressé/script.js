// COURS 1

// var note = 5
// console.log("j'aime le JavaScript et ma note en JavaScript est :",note)
// console.log('j\'aime le JavaScript et ma note en JavaScript est :'+note)
// console.log(`j'aime le JavaScript et ma note en JavaScript est : ${note}`)

// var age = prompt('quel est votre âge') //Pour afficher une case de départ à la connexion.
// var age = parseInt(prompt('quel est votre âge')) //Pour transformer la chaine de carctère en nombre
// var age = parseFloat(prompt('quel est votre âge')) //pour transformer la chaine de caractère en nombre tt en prenant la partie décimale
// console.log(`Vous avez ${age} ans`)


// let A = 3
// let B = 4
// let C = A + B
// console.log("A = 3")  //Pour afficher dans la console dès le lancement du site.
// console.log("B = 4")
// console.log(`La somme de ${A} et ${B} est égal à ${C}`)

/*
 Algo3 : 

A est un entier
B est un entier 
C est la somme de A + B 
Peut être mit en une seule ligne : "A, B, C : ENTIERS"

Début 
    A := 3 
    B := 4
    C := A + B
    Afficher “le résultat de ‘A’+’B’ est égal à ‘C’ 
Fin
*/



// COURS 2


// let x = parseFloat(prompt("Donnez une valeur à x"))
// let y = parseFloat(prompt("Donnez une valeur à y"))
// if (x>y){
//     console.log(`${x} est supérieur à ${y}`);
// }
// // "=" affecte une valeur, "==" permet de voir si la valeur est la même, "===" permet de voir si la valeur et le type est le même.
// else if (x == y){
//     console.log(`${x} est égal à ${y}`);
// }
// else if (x<y) {
//     console.log(`${y} est supérieur à ${x}`);
// }
// else{
//     console.log(`vous avez fait une erreur de frappe`);
// }

// Pour mettre le "if/else if" en une ligne : opérateur ternaire

// x>y ? console.log(`${x} est supérieur à ${y}`) : console.log(`${y} est supérieur à ${x}`)

// Connecteurs logique :
// et : "and" "&&"
// ou : "or" "||"
// inverse : "not" "!"


// BOUCLE WHILE

// var a=0
// while (a<10){
//     console.log(a)
//     a = a+1
// }
// age /=6 <=> age = age/6
// age *=5 <=> age = age*5
//age++ <=> age = age +1 <=> age+=1


// BOUCLE FOR

// for (let i=0;i<10;i++){
//     console.log(i);
// }

// PREMIERE MANIERE DE DEF UNE FONCTION
// function disBonjour(){
//     document.write(`<h1> Bonjour <h1>`)
// }
// // j'appelle ma fonction
// disBonjour()

// DEUXIEME MANIERE DE DEF UNE FONCTION

// let disBonjour = function(){
//     document.write(`<h1> Bonjour <h1>`)
// }

// disBonjour()

// FAIRE UNE FONCTION FLECHEE

// let addition = (x, y) => x+y
// document.write(`<h2> Somme = ${addition(5,3)} </h2>`)
// on n'a plus besoin d'accolades ou du mot "return"

// FAIRE UN TABLEAU

// let tableau = [1,2, "a", true]
// tableau[3] = "bonjour"
// console.log(tableau)
// tableau[4] = "au revoir"
// // document.write(`<h2>${tableau[3]}</2>`)
// document.write(`<h2>${tableau.length} ${tableau[3][0]}</h2>`)//Pour seulement affcicher le premier caractère du 3e input du tableau
// console.log(tableau)

// POUR AFFICHER LES ELEMENTS D UN TABLEAU, DEUX METHODES

// tableau = [10,20,30,40]
// for (let i=0; i<tableau.length;i++){
//     document.write(`${tableau[i]} <br>`);
// }

// tableau = [10,20,30,40]
// for (let valeur of tableau){
//     document.write(`${valeur}`)
// }

