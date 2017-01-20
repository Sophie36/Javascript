"use strict";



function Product(reference,nom,description,poids,dimension,photo){
    if (reference == undefined || reference == "" || reference == null){
        this.reference = "01";
    }
    else {
        this.reference = reference;
    }
    this.nom = nom;
    this.description = description;
    this.poids = poids;
    this.dimension = dimension;
    this.photo = photo;
    this.subProduct = [];
    this.addFeature = function (nameFeature,descriptionFeature){
       this[nameFeature] = descriptionFeature; 
    };
    this.addSubProduct = function(param){
        if(param instanceof Product){
            this.subProduct.push(param);
        }
    } 
    }
    


var chocolat=new Product("","kinder","chocolat blanc",300,30,"../img/bonbon.png");
debugger;
chocolat.addFeature("quantite","cinq");

var gateau=new Product("","cake","fruit",150,510);
gateau.addFeature("quantite","quatre");

chocolat.addSubProduct (gateau);

function initialiseProductFiche(param) {
    debugger;
    Object.keys(param).forEach(function (key) {
        debugger;
        if ("photo" != key) {
            var text = undefined != param[key] ? param[key] : "";
            document.getElementById(key).innerHTML = text;
        } else {
           document.getElementById(key).src = param[key];    
        }
    });
}





initialiseProductFiche(chocolat);

