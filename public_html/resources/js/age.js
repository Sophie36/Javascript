"use strict";

/* Exercice sur les conditions : dites-moi l’âge que vous avez et je vous
dirai qui vous êtes.
 De 0 à 1 compris : Vous êtes un bébé.
 De 1 à 6 ans compris : Vous êtes un jeune enfant.
 De 7 à 11 ans compris : Vous êtes un enfant qui a atteint l'âge de raison.
 De 12 à 17 ans compris : Vous êtes un adolescent.
 De 17 à ???: Vous êtes un jeune adulte.
 Supérieur à ??? : Vous êtes un sénior.

 Vous pouvez aussi ajouter un radio button grâce auquel vous
déterminerez le sexe de l’utilisateur. A l’aide de ternaires, vous
pourrez ainsi accorder les phrases en fonction de l’utilisateur.*/

var genre = null;
function giveFeature(age){
    var determinant = "un";
    if(genre === "F"){
        determinant = "une";
    }
    if (age>=0 && age<=1){
        document.getElementById("resultat").innerHTML ='Vous êtes ' + determinant + ' bébé';
    }
    else if (age>=1 && age<=6){
        document.getElementById("resultat").innerHTML ='Vous êtes ' + determinant + ' jeune enfant';
    }
    else if (age>=7 && age<=11){
        document.getElementById("resultat").innerHTML ='Vous êtes ' + determinant + ' enfant qui a atteint l\'âge de raison';
    }
    else if (age>=12 && age<=17){
	document.getElementById("resultat").innerHTML ='Vous êtes ' + determinant + ' adolescent(e)';
    }
    else if (age>=17 && age<=20){
	document.getElementById("resultat").innerHTML ='Vous êtes ' + determinant + ' jeune adulte';
    }
    else if (age>=21 && age<=45){
	document.getElementById("resultat").innerHTML ='Vous êtes ' + determinant + ' adulte';
    }
    else if (age>=46 && age<=150){
        document.getElementById("resultat").innerHTML ='Vous êtes ' + determinant + ' sénior(e)';
    }
}

function changeGenre(){
    debugger;
    var radiobuttons = document.getElementsByName("genre");
    for (var i=0; i < radiobuttons.length; i++){
        if (radiobuttons[i].checked) {
            genre = radiobuttons[i].value;
            break;
        }
    }
}


