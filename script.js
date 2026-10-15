const nom_boutique = document.getElementById("shop-name");

console.log(nom_boutique);

nom_boutique.innerHTML = SHOP_NAME;

const date_actuelle = document.getElementById("current-date");
console.log(date_actuelle);

// Ici je créer une instance de la classe Date
const today = new Date();

date_actuelle.textContent = today.toLocaleDateString("fr-FR");

const heure_actuelle = document.getElementById("current-time");

console.log(heure_actuelle);

// on récupère le timestamps, c'est le nombre de seconde écoulé depuis le 1er janvier 1970
// La fonction updateClock est la fonction qui va s'executer TOUTES LES 1 SECONDE
function updateClock() {
    // toLocaleTimeString permet de récupérer le temps exact au format voulu, ici fr
    heure_actuelle.textContent = new Date().toLocaleTimeString("fr-FR");
}

// J'execute updateClock une premiere fois pour afficher initialement l'heure
updateClock();
// Et ensuite, je mets en place une intervalle de 1 seconde (1000 ms = 1s), pour que à chaque seconde, l'ehure change 
setInterval(updateClock, 1000);
