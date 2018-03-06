"use strict"
// la anterior linea es para ejecutar en modo estricto

// funcion que genera los distintos eventos de la página, cuando ya exiten todos los elementos
window.onload=function(){
	var aceptacion=document.getElementById("aceptacion");
	aceptacion.addEventListener("change",permitirEnvio,false);
	var validacion=document.getElementById("boton-envio");
	validacion.addEventListener("click",validar,false);
};

// Activa el boton de submit o de envio
function permitirEnvio(){
	var aceptado=document.getElementById("aceptacion").checked;
	if(aceptado){
		(document.getElementById("boton-envio")).removeAttribute("disabled");
		document.getElementById("boton-envio").style.backgroundColor = "PaleGreen";
	}
	else{
		(document.getElementById("boton-envio")).setAttribute("disabled","disabled");
		document.getElementById("boton-envio").style.backgroundColor = "orange";
	}
};

// funcion que comprueba todos los parametros introducidos por el usuario, llamando a distintas funciones
function validar(){
	comprobarNombre();
	comprobarApellido1();
	comprobarApellido2();
	comprobarCorreo();
	comprobarAlias();
	comprobarContrasena();
	comprobarCopia();
	comprobarSeleccion();
	comprobarRespuesta();	
};

// funcion que pone en naranja el campo para mostrar al usuario que lo introducido no es valido.
function mostrarError(id,idError,error){
	document.getElementById(id).style.backgroundColor = "orange"; 
	document.getElementById(idError).innerHTML=error; 
};

// funcion que pone en verde el campo para mostrar al usuario que lo introducido es valido.
function mostrarValido(id,idError){
	document.getElementById(id).style.backgroundColor = "PaleGreen"; 
	document.getElementById(idError).innerHTML="";  
};

function comprobarNombre(){
	var id = "nombreUsuario";
	var idError= "error-nombreUsuario"
	var error= "Error: caracteres insuficientes en el campo nombre, introduzca tres o más."
	frase=document.getElementById(id).value;
	var letra= frase.substr(2,1);
	var letras="abcdefghyjklmnñopqrstuvwxyz";
   	letra = letra.toLowerCase();
   	if (letras.indexOf(letra)==0){
        mostrarError(id,idError,error);
        return false;
    }
  	else {
  		mostrarValido(id,idError);
	}	
};

// funcion que comprueba que el usuario haya introducido 3 caracteres o mas en el primer apellido
function comprobarApellido1(){
	var id = "apellidoUsuario1";
	var idError= "error-apellidoUsuario1"
	var error= "Error: caracteres insuficientes en el campo primer apellido, introduzca tres o más."
	frase=document.getElementById(id).value;
	var letra= frase.substr(2,1);
	var letras="abcdefghyjklmnñopqrstuvwxyz";
   	letra = letra.toLowerCase();
   	if (letras.indexOf(letra)==0){
        mostrarError(id,idError,error);
        return false;
    }
  	else {
  		mostrarValido(id,idError);
	}	
};

// funcion que comprueba que el usuario haya introducido 3 caracteres o mas en el segundo apellido
function comprobarApellido2(){
	var id = "apellidoUsuario2";
	var idError= "error-apellidoUsuario2"
	var error= "Error: caracteres insuficientes en el campo segundo apellido, introduzca tres o más."
	frase=document.getElementById(id).value;
	var letra= frase.substr(2,1);
	var letras="abcdefghyjklmnñopqrstuvwxyz";
   	letra = letra.toLowerCase();
   	if (letras.indexOf(letra)==0){
        mostrarError(id,idError,error);
        return false;
    }
  	else {
  		mostrarValido(id,idError);
	}	
};

// funcion que hace comprobaciones en el campo email
function comprobarCorreo(){
	var id = "correo";
	var idError= "error-correo"
	var error1= "Error: caracteres insuficientes, introduzca cinco o más."
	var error2= "Error: no ha introducido el caracter '@'."
	var error3= "Error: no ha introducido el caracter '.'."
	var error4= "Error: el caracter '.' debe ir detras de el caracter '@'."
	var frase= new String();
	frase=document.getElementById(id).value;
	if ((frase.length)>4){
		if ((frase.indexOf("@"))==-1){
        	mostrarError(id,idError,error2);
        	return false;
    	}
    	if ((frase.indexOf("."))==-1){
        	mostrarError(id,idError,error3);
        	return false;
    	}
    	if ((frase.indexOf("@"))>(frase.indexOf("."))){
    		mostrarError(id,idError,error4);
        	return false;
    	}
    	else{
    		mostrarValido(id,idError);
    	}

	}
  	else {
  		mostrarError(id,idError,error1);
  		return false;	
	}
};

// funcion que comprueba que el usuario haya introducido 3 caracteres o mas en el campo alias
function comprobarAlias(){
	var id = "alias";
	var idError= "error-alias"
	var error= "Error: caracteres insuficientes en el campo alias, introduzca tres o más."
	var frase= new String();
	frase=document.getElementById(id).value;
	console.log(frase);
	if ((frase.length)>2){
		mostrarValido(id,idError);
	}
	else{
		mostrarError(id,idError,error);
  		return false;	
	}
};

// funcion que comprueba que el usuario haya introducido 6 caracteres o mas en la contraseña
function comprobarContrasena(){
	var id = "contrasena1";
	var idError= "error-contrasena1"
	var error= "Error: caracteres insuficientes en el campo contraseña, introduzca 6 o más."
	var frase= new String();
	frase=document.getElementById(id).value;
	if ((frase.length)>5){
		mostrarValido(id,idError);
	}
	else{
		mostrarError(id,idError,error);
  		return false;	
	}
};

// funcion que comprueba que el usuario repite la contraseña correctamente
function comprobarCopia(){
	var id = "contrasena2";
	var idError= "error-contrasena2"
	var error= "Error: el valor introduccido no es valido."
	var frase1= new String();
	frase1=document.getElementById("contrasena1").value;
	console.log(frase1);
	var frase2= new String();
	frase2=document.getElementById(id).value;
	console.log(frase2);
	
	if ((frase1==frase2)&&((comprobarContrasena())!=false)){
		mostrarValido(id,idError);
	}
	else{
		mostrarError(id,idError,error);
  		return false;	
	}
};

// funcion que verifica que se haya seleccinado algo
function comprobarSeleccion(){
	var id = "pregunta";
	var idError= "error-pregunta"
	var error= "Error: debe seleccionar una."
	var lista=document.getElementById(id);
	var indiceSel=lista.selectedIndex;
	var valor=lista.options[indiceSel].value;
	if (valor!=0){
		mostrarValido(id,idError);
	}
	else{
		mostrarError(id,idError,error);
  		return false;	
	}
};

function comprobarRespuesta(){
	var id = "respuesta";
	var idError= "error-respuesta"
	var error= "Error: debe introducir ocho caracteres o más."
	var frase= new String();
	frase=document.getElementById(id).value;
	if ((frase.length)>7){
		mostrarValido(id,idError);
	}
	else{
		mostrarError(id,idError,error);
  		return false;	
	}
};









