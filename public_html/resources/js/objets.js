"use strict";



function Product(nom,description,poids,dimension,photo){
    this.nom = nom;
    this.description = description;
    this.poids = poids;
    this.dimension = dimension;
    this.photo = (src="../img/bonbon.png")
    this.addFeature = function (nameFeature,descriptionFeature){
       this[nameFeature] = descriptionFeature; 
    };
    }

var chocolat=new Product("kinder","chocolat blanc",300,30,);
debugger;
chocolat.addFeature("quantite","cinq");
chocolat.addFeature("quantite","quatre");



document.getElementById("nom").innerHTML=chocolat.nom;
document.getElementById("description").innerHTML=chocolat.description;
document.getElementById("poids").innerHTML=chocolat.poids;
document.getElementById("dimension").innerHTML=chocolat.dimension;
document.getElementById("photo").appendChild(photo);



