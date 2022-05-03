document.write("<h1>ciclos for</h1> <br>")
for(var i=0;i<=2;i++){//contado, condicion,en cada ejecucion se ejecuta
    document.write(i);
	document.write(i+"<br>");
	document.write("que cambios hay <br>");
}
document.write("<h1>ciclos while</h1> <br>")

var i=0;
while(i<=2){
	document.write(i+"<br>");
	i++;
}

document.write("<h1>ciclos Do while</h1> <br>")

do{ 
   document.write("almenos se ejecuta una vez")
}while(i<=2);