// Exercice 0

// var x = 7
// var y = 0.8
// var z = x+y
// console.log(`${z} est différent de la ligne du dessous`)
// console.log("parce qu'on peut voir ça comme ça" ,z);

// Correction

// let x = "7";
// y = parseFloat(x)
// console.log(typeof(x), typeof(y));

// Exercice 1

// age<17 ? console.log(`vous êtes mineur`) : console.log("vous êtes majeur");

// let age = parseFloat(prompt(`veuillez saisir votre âge`))
// if (0<=age && age<12){
//     console.log(`vous êtes mineur`)
// }
// else if (18<=age && age<100){
//     console.log(`vous êtes un adulte`);
// }
// else if (12<=age && age<18){
//     console.log(`vous êtes un adolescent`)
// }
// else{
//     console.log(`vous avez fait une erreur de frappe`);
// }

//  Exercice 2
// let noteA= parseFloat(prompt(`Donnez la première note`))
// let noteB = parseFloat(prompt(`Donnez la deuxième note`))
// let noteC = parseFloat(prompt(`Donnez la troisième note`))
// let résultat = (noteA+noteB+noteC)/3
// if (résultat>=16 && résultat<=20){
//     console.log(`GG c'est beau un ${résultat}/20`);
// }
// else if (résultat<10 && résultat>=0){
//     console.log(`C'est nul ${résultat}/20`);
// }
// else if (résultat>=10 && 16<résultat){
//     console.log(`Ca passe mais peut faire mieux avec un ${résultat}/20`);
// }
// else{
//     console.log(`t'as écrit de la merde poto`);
// }

// EXERCICE 3

// let x = parseInt(prompt("écrire n'importe quel nombre entier positif"))
// x%2==0 ? console.log("Le nombre est pair") : console.log("le nombre est impair");

// EXERCICE 4 SWITCH CASE

// const jour = parseInt(prompt("chosissez le jour correspondant entre 1 et 7"));
// switch (jour){
//     case 1 : 
//     console.log(`lundi`);
//     break;
//     case 2 : 
//     console.log(`mardi`);
//     break;
//     case 3 : 
//     console.log(`mercredi`);
//     break;
//     case 4 : 
//     console.log(`jeudi`);
//     break;
//     case 5 : 
//     console.log(`vendredi`);
//     break;
//     case 6 : 
//     console.log(`samedi`);
//     break;
//     case 7 : 
//     console.log(`dimanche`);
//     break;
//     default : console.log("vous avez fait une erreur")
// }

// EXERCICE 5

// age = parseInt(prompt("Donnez votre age"))
// prix = parseInt(prompt("Marquez la solde total de vos achats"))


// Écrire un programme qui vérifie si un client est éligible à cette offre spéciale en
// fonction de son âge ou du montant total de ses achats.
// if(60<=age && 120>=age || prix>=50 ){
//     console.log("vous êtes éligible à la promotion");
// }
// else{
//     console.log("bye bye t'as pas de promo");
// }

// Un magasin vend un habit complet pour senior à -20% si les achats sont supérieur à 50
// euros.

// if(60<=age && 120>=age && prix>=50 ){
//     console.log("vous êtes éligible à la promotion");
// }
// else{
//     console.log("bye bye t'as pas de promo");
// }