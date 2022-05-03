var element = document.createElement("li");
	contenidol=document.createTextNode("Nuevo Texto");

	element.appendChild(contenidol);
	
	document.body.appendChild(element);//al final de body

	var padre=document.getElementById("lista");//contenido de lista
   
    var padre2=document.getElementsByTagName("li")[0].parentNode,// todos <li>, el primer elemento <li>,obtiene el padre
        primerele=document.getElementsByTagName("li")[0],//primer elemento}
         segle=document.getElementsByTagName("li")[1];
   padre.appendChild(element);// introduce ultimo
   alert(padre.innerHTML);//lo que contenia antes
   alert(padre.textContent);//
   //padre2.insertBefore(element,primerele);// introduce antes de
   padre2.insertBefore(element,segle);//