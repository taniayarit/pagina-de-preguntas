var name = prompt('Hola, bienvenida a Juegos de Historia! \n ¿Cuál es tu nombre?');
name = name.toUpperCase();

var elemento = document.getElementById('welcome');
elemento.innerHTML = "Bienvenida " + name;


function myFunction() {
	if (confirm("¿Quieres Jugar?")) {

		document.getElementById("push").style.visibility = "visible";
		document.getElementById("demo").style.visibility = "hidden";

	}
	else {

		document.getElementById("demo").style.visibility = "visible";
		document.getElementById("push").style.visibility = "hidden";
	}
}
