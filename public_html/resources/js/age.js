"use strict";
function giveFeature(age){
    if (age>=0 && age<=1){
        alert("Vous êtes un bébé");
    }
    else if (age>=1 && age<=6){
        alert("Vous êtes un jeune enfant");
    }
    else if (age>=7 && age<=11){
        alert("Vous êtes un enfant qui a atteint l'âge de raison");
    }
    else if (age>=12 && age<=17){
	alert("Vous êtes un adolescent");
    }
    else if (age>=17 && age<=20){
	alert("Vous êtes un jeune adulte");
    }
    else if (age>=21 && age<=45){
	alert("Vous êtes un adulte");
    }
    else{
        alert("Vous êtes un sénior");
    }
}


