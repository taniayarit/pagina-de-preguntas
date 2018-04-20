var startGame = prompt('¿Deseas jugar una trivia?', 'Si');
startGame = startGame.toUpperCase();
var elemento = document.getElementById('title');
elemento.innerHTML = 'Juegos de Historia Peruana';
if (startGame === "SI") {
  alert('Responde con a, b, c');

  document.getElementById("boton1").style.visibility = "visible";
  document.getElementById("boton2").style.visibility = "visible";
  document.getElementById("boton3").style.visibility = "visible";
  document.getElementById("tabla").style.visibility = "visible";

  //respuesta1 .b
  var respuesta1 = prompt('La participación política de la mujer, mediante el ejercicio del sufragio, se logró durante el gobierno de... \n a. Manuel Prado \n b. Manuel Odría \n c. Ricardo Pérez Godoy');

  //respuesta2 .b
  var respuesta2 = prompt('La jornada de las 8 horas en el Perú se implantó definitivamente durante el gobierno de... \n a. Oscar R. Benavides \n b. José Pardo \n c. Augusto B. Leguía' );

  //respuesta3 .a
  var respuesta3 = prompt('Durante el segundo Gobierno de Ramón Castilla las tropas peruanas invadieron la república de... \n a. Ecuador \n b. Colombia \n c. Chile');
} else if (startGame === "NO") {
  elemento.innerHTML = "Jugaremos otro día! :( ";
  document.getElementById("tabla").style.visibility = "hidden";
} else {
    elemento.innerHTML = "¡Refresque la página y responda nuevamente!";
    document.getElementById("tabla").style.visibility = "hidden";
}
var elemento1 = document.getElementById('prob1');
elemento1.innerHTML = respuesta1.toUpperCase();
var elemento2 = document.getElementById('prob2');
elemento2.innerHTML = respuesta2.toUpperCase();
var elemento3 = document.getElementById('prob3');
elemento3.innerHTML = respuesta3.toUpperCase();
function myFunction1() {
  if (confirm("Ver explicación de la respuesta 1")){
    document.getElementById("trivia1").style.visibility = "visible";
  } else {
    document.getElementById("trivia1").style.visibility = "hidden";
  }
}
function myFunction2() {
  if (confirm("Ver explicación de la respuesta 2")){
    document.getElementById("trivia2").style.visibility = "visible";
  } else {
    document.getElementById("trivia2").style.visibility = "hidden";
  }
}

function myFunction3() {
  if (confirm("Ver explicación de la respuesta 3")){
    document.getElementById("trivia3").style.visibility = "visible";
  } else {
    document.getElementById("trivia3").style.visibility = "hidden";
  }
}
var acertadas = 0;
var puntaje = 0;

if (respuesta1.toUpperCase()=="B" && respuesta2.toUpperCase()=="B" && respuesta3.toUpperCase()=="A") {

  acertadas= 3;
  puntaje = 30;
} else {
  if (respuesta1.toUpperCase()!="B" && respuesta2.toUpperCase()!="B" && respuesta3.toUpperCase()!="A") {
    acertadas=0;
    puntaje = 0;
  } else {
    if (respuesta1.toUpperCase()!="B" && respuesta2.toUpperCase()!="B" && respuesta3.toUpperCase()=="A") {
    acertadas=1;
    puntaje = 10;
    } else {
      if (respuesta1.toUpperCase()!="B" && respuesta2.toUpperCase()=="B" && respuesta3.toUpperCase()!="A") {
    acertadas=1;
    puntaje = 10;
      } else {
        if (respuesta1.toUpperCase()=="B" && respuesta2.toUpperCase()!="B" && respuesta3.toUpperCase()!="A") {
    acertadas=1;
    puntaje = 10;
        } else {
          acertadas=2;
          puntaje = 20;}
      }
    }
  }

}
var acertadas1 = document.getElementById("acertadas");
acertadas1.innerHTML="Acertaste " + acertadas + " de 3.";
var puntuacion1 = document.getElementById("puntuacion");
puntuacion1.innerHTML="Tienes " + puntaje + " puntos.";
