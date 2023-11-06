

// Faire un calcul dans une fonction

// let addition = function (x, y) {
//     let somme = x+y
//     document.write(`<h2> Somme = ${somme}</h2>`)
// }

// addition (5,3)

// let addition = function (x, y) {
//     let somme = x+y
//     return somme
// }

// document.write(`<h2> Somme = ${addition(5,3)} <h2/>`)


// let carre = (x) => x**2
// document.write(`<h2>résultat = ${carre(5)}</h2>`)
// document.write(`<h2>résultat = ${carre(18)}</h2>`)

// EXERCICE 2

// let prenoms = ["Jean", "Paul","Pierre","Lydie","Ruth","Esther"]
// prenoms.splice(1, 0, "Marie")
// console.log(`${prenoms}`);
// prenoms.splice(6) // équivaut à prenoms.pop() qui suprrime le dernier élément de la liste
// console.log(`${prenoms}`)
// prenoms.unshift("Esther") //Pour ajouter un élément au début du tableau
// console.log(`${prenoms}`)
// prenoms.push("Jack") //Pour mettre un élément à la fin du tableau
// console.log(`${prenoms}`)
// prenoms.sort() //Pour trier par ordre alphabétique
// console.log(`${prenoms}`)
// let prenoms3 = prenoms.slice(0,3) // Pour prendre les éléments d'un tableau dans un autre tableau
// console.log(`${prenoms3}`)

// let eleve = {
//     nom: "Dupont",
//     age: 20,
//     disbonjour: ()=> console.log(`Bonjour`)
// }

// eleve.prenom = "toto"
// console.log(eleve.nom)
// console.log(eleve["nom"]);
// eleve.disbonjour
// console.log(eleve)

// let eleve = {
//     prenom:"John",
//     nom:"do",
// }
// for(let propriete in eleve){
//     document.write(`${eleve[propriete]}`)
// }


// EXERCICE 4

// phrase = "j'aime le javascript"
// // document.write(`${phrase.length}`) donne le nombre de caractères de la phrase
// document.write(`${phrase.indexOf("m")}`) permet de trouver la place du caractère