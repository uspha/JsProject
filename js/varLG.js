//variables globales
//locales
var global= "global";

var mifuncion= function(){
	//var local="local"//local
    var local=" es ... local";//global
	//alert(global);
	//	global="nuevoglobal";
	var funcionLocal = function(){
		//var local="local del local"
		
		alert(""+local);
	}
    
  	funcionLocal();
}

mifuncion();
//alert(global);
//alert(local);//no funciona si no es local
