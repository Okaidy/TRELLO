var boton = document.getElementById('new');

boton.onclick = function() {
	crearFormulario();
}

function crearFormulario() {
	var formulario = document.createElement('form');
	boton.parentNode.appendChild(formulario);

	var nombre = document.createElement('input');
	nombre.setAttribute("type","text");
	nombre.setAttribute("placeholder","Nombre de la lista");
	formulario.appendChild(nombre);

	var agregar = document.createElement('button')
	agregar.innerHTML = "Aceptar";
	agregar.setAttribute("class","amarillo blanco");
	formulario.appendChild(agregar);

}