var boton = document.getElementById('new');

boton.onclick = function() {
	crearFormulario();
}

function crearFormulario() {
	var formulario = document.createElement('div');
	formulario.setAttribute("class","forma");
	boton.parentNode.appendChild(formulario);

	var nombre = document.createElement('input');
	nombre.setAttribute("type","text");
	nombre.setAttribute("placeholder","Nombre de la lista");
	formulario.appendChild(nombre);

	var agregar = document.createElement('button')
	agregar.innerHTML = "Aceptar";
	agregar.setAttribute("class","amarillo blanco");
	agregar.setAttribute("type","submit");	
	formulario.appendChild(agregar);

	crearLista(nombre);
}

function crearLista(titulo){
	var guardar = document.getElementsByTagName('button')
	for (var i = 0; i < guardar.length; i++) {
		guardar[i].onclick = function(){
			if (titulo.value == 0){
				alert('Escriba un nombre de la lista');
			} else {
				var contenedor = document.createElement('div');
				contenedor.setAttribute("class","contenedor text-center");
				contenedor.innerHTML = titulo.value.toUpperCase();
				boton.parentNode.appendChild(contenedor);
				var btnTarjeta = document.createElement('button');
				btnTarjeta.innerHTML="Añadir una tarjeta";
				btnTarjeta.setAttribute("class","botonTarjeta blanco");
				contenedor.appendChild(btnTarjeta);
				titulo.value="";
			}
		}
	}

}
