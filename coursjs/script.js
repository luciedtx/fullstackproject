let prenoms = ["Jean", "Paul", "Pierre", "Lydie", "Ruth", "Esther"];

prenoms.splice(1, 0, "Marie");
console.log(prenoms);

// 2. Supprimer le prénom Esther
prenoms.splice(6)
console.log("Après avoir supprimé Esther :", prenoms);

// 3. Ajouter le prénom Esther au début du tableau
prenoms.unshift("Esther");
console.log("Après avoir ajouté Esther au début :", prenoms);

// 4. Ajouter le prénom Jaques à la fin du tableau
prenoms.push("Jaques");
console.log("Après avoir ajouté Jaques à la fin :", prenoms);

// 5. Trier le tableau par ordre alphabétique
prenoms.sort();
console.log("Après avoir trié par ordre alphabétique :", prenoms);

// 6. Définir un tableau avec les trois premiers éléments du tableau prenoms
let troisPremiers = prenoms.slice(0, 3);
console.log("Les trois premiers éléments :", troisPremiers);