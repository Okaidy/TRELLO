var boton = document.getElementById('new');

boton.onclick = function() {
	crearFormulario();
}

function crearFormulario() {
	var formulario = document.createElement('div');
	formulario.setAttribute("class","forma arriba");
	boton.parentNode.insertBefore(formulario, boton);

	var nombre = document.createElement('input');
	nombre.setAttribute("type","text");
	nombre.setAttribute("placeholder","Nombre de la lista");
	formulario.appendChild(nombre);
	nombre.focus();

	var agregar = document.createElement('button')
	agregar.innerHTML = "Aceptar";
	agregar.setAttribute("class","amarillo blanco");
	agregar.setAttribute("type","submit");	
	formulario.appendChild(agregar);

	crearLista(nombre,formulario);
}

function crearLista(titulo,elemento){
	var guardar = document.getElementsByClassName('amarillo')
	for (var i = 0; i < guardar.length; i++) {
		guardar[i].onclick = function(){
			if (titulo.value == 0){
				alert('Escriba un nombre de la lista');
			} else {
				var contenedor = document.createElement('div');
				contenedor.setAttribute("class","arriba contenedor text-center");
				contenedor.innerHTML = titulo.value.toUpperCase();
				boton.parentNode.insertBefore(contenedor,boton);
				var btnTarjeta = document.createElement('button');
				btnTarjeta.innerHTML="Añadir una tarjeta";
				btnTarjeta.setAttribute("class","botonTarjeta blanco");
				contenedor.appendChild(btnTarjeta);
				
				titulo.value="";
				boton.parentNode.removeChild(elemento);

				crearTarjeta(btnTarjeta);
			}
		}
	}
}

function crearTarjeta(btntjt) {
	btntjt.addEventListener('click',function(evento) {
		var nombreTarjeta = document.createElement('textarea');
		this.parentNode.insertBefore(nombreTarjeta,btntjt);
		nombreTarjeta.focus();
	},false);
}

