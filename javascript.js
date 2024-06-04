//variables de base
var score = 50;
var four = 1;
var cuistot = 0;

var prixFour = 5;
var prixCuistot = 5;

//pop up tuto à l'ouverture de la fenêtre
//popper le tuto
function tuto(){
    document.getElementById("modal").style.display = "block";
    console.log("hello");
}
addEventListener("load", tuto);

//fermer le tuto

function closeTuto(){
document.getElementById("modal").style.display = "none";
console.log("hello again")
}
addEventListener("click", closeTuto);


//cliquer = 1$
function cuisiner(){
    score += four;
    document.getElementById("score").innerHTML = Math.round(score) + "$";
};

//+1 four = +1$/clic
function acheterFour(){
    if(score < prixFour){
        return;
    }
    score -= prixFour;
    prixFour *= 1.5;
    four += 1;
    document.getElementById("four").innerHTML = `Nombre de four : ${four} <br> Prix : ${Math.round(prixFour)}$`;
    document.getElementById("score").innerHTML = Math.round(score) + "$";
};

//+1 cuistot = +1$/seconde
function acheterCuistot(){
    if(score < prixCuistot){
        return;
    }
    score -= prixCuistot;
    prixCuistot *= 1.5;
    cuistot += 1;
    document.getElementById("cuistot").innerHTML = `Nombre de cuistot : ${cuistot} <br> Prix : ${Math.round(prixCuistot)}$`;
    document.getElementById("score").innerHTML = Math.round(score) + "$";
};

function cuistoter(){
    score += cuistot;
    document.getElementById("score").innerHTML = Math.round(score) + "$";
};
setInterval(cuistoter, 1000);

//Emprunt = argent immédiat MAIS sera retiré du compte automatiquement 10 secondes plus tard avec un taux
var emprunt = 100;
var taux = 0;
var prixEmprunt = emprunt/2;
var ancienTaux = 0;
var ancienEmprunt = 0;

function emprunter(){
    if(score < prixEmprunt){
        return;
    }
    ancienTaux = taux;
    ancienEmprunt = emprunt;
    score += emprunt;
    emprunt *= 1.5;
    taux += 5;
    document.getElementById("score").innerHTML = Math.round(score) + "$";
    document.getElementById("pack").innerHTML = `Emprunter ${Math.round(emprunt)}$ <br> Taux : ${Math.round(taux)}%`;
    setTimeout(payer,5000);
};

function payer(){
    score = score-(ancienEmprunt+(ancienEmprunt*(ancienTaux/100)));
    document.getElementById("score").innerHTML = Math.round(score) + "$";
    lost();
}

//perdre si score < 0 et reseter la partie
function lost(){
    if(score > 0){  
        return;}
        window.alert(`Les dettes vous ont rattrapées, vous avez perdu la partie... \n Highscore : ${Math.round(highScore)}`);
        score = 0;
        four = 1;
        cuistot = 0;
        prixFour = 5;
        prixCuistot = 5;
        emprunt = 100;
        taux = 0;
        prixEmprunt = emprunt/2;
        ancienTaux = 0;
        ancienEmprunt = 0;
        document.getElementById("four").innerHTML = `Nombre de four : ${four} <br> Prix : ${Math.round(prixFour)}$`;
        document.getElementById("cuistot").innerHTML = `Nombre de cuistot : ${cuistot} <br> Prix : ${Math.round(prixCuistot)}$`;
        document.getElementById("pack").innerHTML = `Emprunter ${Math.round(emprunt)}$ <br> Taux : ${Math.round(taux)}%`;
    };

//Enregistrer le high score
var highScore = 0;
function newHS(){
    if(score < highScore)
        return;
    highScore = score;
};
setInterval(newHS, 500);

//changer le skin (la page CSS) de la page HTML
function changeSkin(){
    
    document.getElementById("css").href = "style-alt.css";
    
    console.log("yoo");
};

/*LISTE D'IDEES D'OPTIONS
- télécharger un diplôme avec son nom et son high score quand on perd
- créer des sauvegardes OU avoir un système d'enregistrement des highscores
- améliorer les animations/ajouter un lore
- ajouter des pop ups tuto
- faire en sorte que certaines améliorations n'arrivent qu'à partir d'un certain moment dans le jeu
- créer des objectifs qui délivrent de l'argent
- acheter des skins (CSS) avec son argent
*/
