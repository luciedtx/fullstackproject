/* Exercice 1.1

Quelles seront les valeurs des variables A et B après exécution des instructions insuivantes ?

Variables A, B ENTIER
DEBUT
A = 1
B = A + 3
A = 3

A après exécution : 3
B après exécution : 4


Exercice 1.2

Quelles seront les valeurs des variables A, B, C après exécution des instructions suivantes ?

Variable A, B, C ENTIER
DEBUT
A = 5
B = 3
C = A + B
A = 2
C = B - A
FIN

A après exécution : 2
B après exécution : 3
C après exécution : 1


Exercice 1.3

Quelles seront les valeurs des variables A et B après exécution des instructions suivantes ?

Variables A, B ENTIER
DEBUT
A = 5
B = A + 4
A = A + 1
B = A - 4
FIN

A après exécution : 6
B après exécution : 5

Exercice 1.4

Quelles sera le résultat après exécution des instructions suivantes ?

DEBUT
Val = 231
Double = Val * 2
Ecrire Val
Ecrire Double
FIN

231 affecté à Val
462 affecté à Double

Exercice 1.5

On veut que A et B aient des valeurs initiales échangées à la fin de l'exécution du programme

Inverse

Variables A et B ENTIERS

DEBUT
A = x
B = y
C = A
A = B
B = C

var A = "x"
var B = "y"
var C = A
var A = B
var B = C
console.log(A, B)

Exercice 1.6 

*/

// let HT = parseInt(prompt("Quel est le prix de l'article"))
// let NB = parseInt(prompt("combien d'exemplaire avez-vous?"))
// let TVA = HT * 1.1
// let TTC = TVA * NB

// console.log(`Le prix de l'article est de ${HT}€`)
// console.log(`Vous avez ${NB} articles`)
// console.log(`Le prix de l'article après imposition de la taxe est de ${TVA}€`)
// console.log(`Vous avez payé un total de ${TTC}€`)



// EXERCICES ALGO PARTIE 3

// EXERCICE 1 

// let x = parseInt(prompt("choissez un nombre entre 0 et 15"))
// let y = 0
// while (y<10){
//     console.log(x*y);
//     y++
// }

// Pour utiliser "for" sur le programme
// let nb = parseInt(prompt("Choissez un nombre entre 0 et 15"))
// for (let i=0;i<10;i++){
//     console.log(nb*i)
// }


// EXERCICE 2

// let x = 0
// for (i=0;i<11;i++){
//     console.log(x+=i);
// }

// EXERCICE 3

// let valeur1 = Number(prompt("donnez une première valeure"))

// if (isNan (valeur1)){
//     return ("la valeur 1 n'était pas correct")
// }
// j'ai du mal avec cette fonction je n'arrive pas à avoir un résultat convaincant 

// let operateur = prompt("donnez un operateur d'ddition, de soustraction, de multiplication ou de division");

// let valeur2 = Number(prompt("donnez la deuxième valeur"))

// if (isNan (valeur2)){
//     return ("la valeur 2 n'était pas correct")
// }

// switch (operateur) {
//     case "+":
//         console.log("Le résultat de votre calcul est",valeur1+valeur2);
//         break;
//     case "-":
//         console.log("Le résultat de votre calcul est",valeur1-valeur2);
//         break;
//     case "/" || "÷":
//         console.log("Le résultat de votre calcul est",valeur1/valeur2);
//         break;
//     case "*" || "⋅" || "⋅":
//         window(console.log("Le résultat de votre calcul est",valeur1*valeur2));
//         break;

//     default: console.log("vous avez fait une erreur dans la saisie");
//         break;
// }