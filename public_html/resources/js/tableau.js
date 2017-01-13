"use strict";

function tableau(){
    var tab= [4, 12, 6, 3];
    var somme=0;
    var valeur="";
    for(var i=0; i<=tab.length -1; i++){

        valeur = valeur + tab[i]+ "<br>"
        somme = somme + tab[i];
    }
    document.getElementById("valeur").innerHTML =valeur;
    document.getElementById("resultat").innerHTML=somme;
}

tableau();




