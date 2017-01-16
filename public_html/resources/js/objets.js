"use strict";



function Product(nom,description,poids,dimension,photo){
    this.nom = nom;
    this.description = description;
    this.poids = poids;
    this.dimension = dimension;
    this.photo = photo;
    }

var chocolat=new Product("kinder","chocolat blanc",300,30,"../img/bonbon.png");

document.getElementById("chocolat").innerHTML=chocolat.nom;
document.getElementById("chocolat").innerHTML=chocolat.description;
document.getElementById("chocolat").innerHTML=chocolat.poids;
document.getElementById("chocolat").innerHTML=chocolat.dimension;


