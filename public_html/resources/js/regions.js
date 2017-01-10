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
    else if (departement=="Côtes-d'Armor"||departement=="Finistère" ||departement=="Ille-et-Vilaine"||departement== "Morbihan"){
            region=="Bretagne";
        
    }
    else if (departement=="Cher"||departement=="Eure-et-Loir"||departement=="Indre"||departement=="Indre-et-Loire"||departement=="Loir-et-Cher"||departement=="	Loiret"){
            region=="Centre-Val de Loire";
    }
    else if (departement=="Corse-du-Sud"||departement=="Haute-Corse"){
            region=="Corse";
    }
    else if (departement=="Ardennes"||departement=="Aube" ||departement=="Marne"||departement== "Haute-Marne"||departement== "Meurthe-et-Moselle"||departement=="Meuse"||departement== "Moselle"||departement=="Bas-Rhin"||departement== "Haut-Rhin"||departement== "Vosges"){
            region=="Grand Est";
    }
    else if (departement=="Aisne"||departement=="Nord" ||departement=="Oise"||departement== "Pas-de-Calais"||departement== "Somme"){
            region=="Hauts-de-France";
    }
    else if (departement=="Paris"||departement=="Seine-et-Marne" ||departement=="Yvelines"||departement== "Essonne"||departement== "Hauts-de-Seine"||departement=="Seine-Saint-Denis"||departement=="Val-de-Marne" ||departement=="Val-d'Oise"){
            region=="Île-de-France";
    }
    else if (departement=="Calvados"||departement=="Eure" ||departement=="Manche"||departement== "Orne"||departement== "Seine-Maritime"){
            region=="Normandie";
    }
    else if (departement=="Charente"||departement=="Charente-Maritime" ||departement=="Corrèze"||departement== "Creuse"||departement== "Dordogne"||departement=="Gironde"||departement=="Landes" ||departement=="Lot-et-Garonne"||departement=="Pyrénées-Atlantiques"||departement== "Deux-Sèvres"||departement=="Vienne" ||departement=="Haute-Vienne"){
            region=="Nouvelle-Aquitaine";
    }
    else if (departement=="Ariège"||departement=="Aude" ||departement=="Aveyron"||departement== "Gard"||departement== "Haute-Garonne"||departement=="Gers"||departement=="Hérault" ||departement=="Lot"||departement=="Lozère"||departement== "Hautes-Pyrénées"||departement=="Pyrénées-Orientales" ||departement=="Tarn"||departement=="Tarn-et-Garonne"){
            region=="Occitanie";
    }
    else if (departement=="Loire-Atlantique"||departement=="Maine-et-Loire" ||departement=="Mayenne"||departement== "Sarthe"||departement== "Vendée"){
            region=="Pays de la Loire";
    }
    else if (departement=="Alpes-de-Haute-Provence"||departement=="Hautes-Alpes" ||departement=="Alpes-Maritimes"||departement== "Bouches-du-Rhône"||departement=="Var"||departement=="	Vaucluse"){
            region=="Provence-Alpes-Côte d'Azur";
    }
    else if (departement=="Martinique"||departement=="La Réunion"||departement=="Guyane"||departement=="Guadeloupe"||departement=="Mayotte"||){
        (departement==region);
    }
    else {
        error;
    }

    var resultOK = "Vous résidez dans la région " + region + ".";
    error==null ?  document.getElementById("resultat").innerHTML = resultOK: error;
}