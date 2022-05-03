var amigos =["a","b","c",true,19,10.20]; //declaracion
var amigos2=["z","y","h"]
amigos[0]=prompt("valor");//asignacion de valor
document.write(amigos[0]);
document.write(amigos[1]);
//metodos de arreblos
amigos[amigos.length]="fer";//añade un ultimo elemento
amigos.push("d","e","f");// directamente al final
amigos.pop();//eliminar el ultimo

var amigos3=amigos.concat(amigos2);//concadenar arreglos
var sms=amigos3.join(" ,");
var ord = amigos2.reverse();
document.write(amigos3.join(" : "))// separa todos con :
document.write(" numero de amigos    "+amigos.length);//longitud
document.write(" numero de amigos3   "+amigos3.length);//longitud
document.write(amigos3);
document.write(sms);
//document.white(ord);


