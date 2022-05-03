/* encabezado */

var encabezado = document.getElementById("encabezado");
encabezado.style.background = "navy";
encabezado.style.color = "#fff";
encabezado.style.fontFamily = "10px";
encabezado.className = encabezado.className.replace("tituloGrande", "") //quitar un setAttribute




var elemento = document.createElement("div"); //creo elemento div
var padre = document.getElementById("contenedor"); //secction a donde quiero insertar
var reference = document.getElementsByTagName("div")[0];
elemento.setAttribute("class", "azul"); //podemos poner cualquiera que tenemos en el css
//document.body.appendChild(elemento);
var reference2 = document.getElementsByTagName("div")[0];
reference2.setAttribute("class", "rojo"); //podemos poner cualquiera que");
padre.insertBefore(elemento, reference);

/* botom */
var botom =document.createElement("input");
botom.setAttribute("value","presioname")
botom.setAttribute("id","botom")
botom.setAttribute("type","button");
botom.setAttribute("onclick","mostrar();");
padre.insertBefore(botom,reference);

var mostrar= function(){
    alert("sale mensaje papa");
}