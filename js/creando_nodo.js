// introducir el subtitulo
var elementP=document.getElementById("p");
var segP=document.getElementById("seggundo");

//1.crear el elemento
var elemento= document.createElement("h2");
//2.-crear un nodo de texto
var contenido =document.createTextNode("ESTE ES NUESTRO TITULAR")

//3.-Añadir  el nodo de texto al elemento
elemento.appendChild(contenido);
//4.- agregar atributos al elemento
elemento.setAttribute("align", "center");
elemento.setAttribute("style", "color: red");

//5.- Agregar el elemento al documento
document.getElementById("subtitulo").appendChild(elemento);