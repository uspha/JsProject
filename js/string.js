var texto = "texto largo";
var nuevo = texto.length;
var nuevo1= texto.substr(0,2)
var nuevo2= texto.indexOf("t");
var nuevo3= texto.indexOf("t",2);
var nuevo3_1 =texto.indexOf("t",nuevo3);
var nuevo4_1= texto.lastIndexOf("t");
var nuevo5=texto.replace(texto,"texto corto");
var nuevo6=texto.replace("texto","texto corto");
var ultimo=texto.toLowerCase();//minuscula
var ultimo1= texto.toUpperCase();//mayuscyla

document.write(texto +"<br>");
document.write("el texto largo del texto es: "+nuevo + "<br/>");
document.write("el sub string 0,2 es: "+nuevo1 + "<br/>");
document.write("la p 1ra t esta en la posicion:"+nuevo2 + "<br/>");
document.write("la p 1ra t despues p 2 es: "+nuevo3 + "<br/>");
document.write("la p 1ra t despues p nuevo3 es: "+nuevo3_1 + "<br/>");
document.write("la ultima t es"+ nuevo4_1+"<br>");
document.write("replazar todo: " + nuevo5+"<br>");
document.write("reemplazar solo texto:"+ nuevo6+"<br>");
document.write(ultimo1+" a " + ultimo);

