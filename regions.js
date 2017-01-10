"use strict";

var generateDepartmentList = new Array("Ain", "Aisne", "Allier", "Alpes-de-Haute-Provence", "Alpes-Maritimes", "Ardèche", "Ardennes", "Ariège", "Aube", "Aude", "Aveyron", "Bas-Rhin", "Bouches-du-Rhône", "Calvados", "Cantal", "Charente", "Charente-Maritime", "Cher", "Corrèze", "Corse-du-Sud", "Côte-d'Or", "Côtes-d'Armor", "Creuse", "Deux-Sèvres", "Dordogne", "Doubs", "Drôme", "Essonne", "Eure", "Eure-et-Loir", "Finistère", "Gard", "Gers", "Gironde", "Guadeloupe", "Guyane", "Haut-Rhin", "Haute-Corse", "Haute-Garonne", "Haute-Loire", "Haute-Marne", "Haute-Saône", "Haute-Savoie", "Haute-Vienne", "Hautes-Alpes", "Hautes-Pyrénées", "Hauts-de-Seine", "Hérault", "Ille-et-Vilaine", "Indre", "Indre-et-Loire", "Isère", "Jura", "La Réunion", "Landes", "Loir-et-Cher", "Loire", "Loire-Atlantique", "Loiret", "Lot", "Lot-et-Garonne", "Lozère", "Maine-et-Loire", "Manche", "Marne", "Martinique", "Mayenne", "Mayotte", "Meurthe-et-Moselle", "Meuse", "Morbihan", "Moselle", "Nièvre", "Nord", "Oise", "Orne", "Paris", "Pas-de-Calais", "Puy-de-Dôme", "Pyrénées-Atlantiques", "Pyrénées-Orientales", "Rhône", "Saône-et-Loire", "Sarthe", "Savoie", "Seine-et-Marne", "Seine-Maritime", "Seine-Saint-Denis", "Somme", "Tarn", "Tarn-et-Garonne", "Territoire de Belfort", "Val-d'Oise", "Val-de-Marne", "Var", "Vaucluse", "Vendée", "Vienne", "Vosges", "Yonne", "Yvelines");
var d = document.departmentListForm.departmentList;
for (var i = 0; i < generateDepartmentList.length; i++)
{
    d.length++;
    d.options[d.length - 1].text = generateDepartment[i];
}
        
function getRegion(departement){
    var region = "";
    var error = null;
    
    if (departement=="Ain"||departement=="Allier" ||departement=="Ardèche"||departement== "Cantal"||departement== "Drôme"||departement== "Isère"||departement=="Loire"||departement== "Haute-Loire"||departement=="Puy-de-Dôme"||departement== "Savoie"||departement=="Haute-Savoie"){
            region=="Auvergne-Rhône-Alpes";
    }
    else if (departement=="Côte-d'Or"||departement=="Doubs" ||departement=="Jura"||departement== "Nièvre"||departement== "Haute-Saône"||departement== "Saône-et-Loire"||departement=="Yonne"||departement== "Territoire de Belfort"){
            region=="Bourgogne-Franche-Comté";
    }
    /*
    else if (){
        
    }
    else if (){
        
    }
    else if (){
    
    }
    else if (){
    
    }
    else if (){
    
    }
    else if (){
    
    }
    else if (){
    
    }
    else if (){
    
    }
    else if (){
    
    }
    else if (){
    
    }
    else if (){
    
    }
    else if (){
        (departement==region);
    }
    else {
        error;
    }
*/
    var resultOK = "Vous résidez dans la région " + region + ".";
    error==null ?  document.getElementById("resultat").innerHTML = resultOK: error;
}