"use strict";

function tableau(){
    var tab= [4,12,6,3];
    var somme=0;
    var valeur="";
    for(var i=0; i<=tab.length -1; i++){
        somme = somme + tab[i];
        if (!isNaN(tab[i])){
            if(i===0){
                valeur = ""+ tab[i]+"<br/>";
            }
            else {
		valeur = valeur + "+" + tab[i] + "<br>";
            }
            
        }
    }
   
}
document.getElementById("valeur").innerHTML=valeur;
document.getElementById("resultat").innerHTML=somme;

tableau();




