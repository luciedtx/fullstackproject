const convertion = document.querySelector("#convertion")
const resultat = document.querySelector("span")

convertion.addEventListener("click", function(evenement){
    let dollar = document.querySelector("#dollar").value
    let calcul = dollar*0.93
    resultat.innerText = calcul
    evenement.preventDefault()
})



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

