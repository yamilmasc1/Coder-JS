document.addEventListener("DOMContentLoaded", () => {
    crearCuadrados();

let palabrasAdivinar = [[]];
let cuadradosDisponibles = 1;
let indicePalabra = 0;
const palabra = ["actos", "blusa", "marea", "pluma"];
let palabraEnJuego = palabra[indicePalabra];
let recuentoDePalabras = 0;
//Esta seccion va a ser modificada con la seccion sweet alert
/*
  let nombre = prompt("Ingrese su nombre Aqui");
  if (nombre == "") {
    alert("No ingresaste ningun nombre.");
  }
  else {
    alert("Bienvenido "+nombre+" disfrute del Wordle!.");
  } */

  // USO del Sweet alert
  const ipAPI = '//api.ipify.org?format=json'
/*Probe el feedback que me recomendaste en la entrega anterior pero de igual manera me rompia el codigo. Este no me lo rompe pero me desacomoda la cuadricula
const inputValue = fetch(ipAPI)
  .then(response => response.json())
  .then(data => data.ip)

const { value: ipAddress } =  Swal.fire({
  title: 'Ingrese su nombre aqui.',
  input: 'text',
  inputLabel: 'Nombre:',
  inputValue: inputValue,
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'Este campo debe ser completado!'
    }
  }
})

if (ipAddress) {
  Swal.fire(`Su nombre es ${ipAddress}`)
}*/ //Voy a probar realizando otro sweet alert mas basico, sin tener que consumir una API.
buscarLocalStorage();
function buscarLocalStorage(){
  const palabraEnJuegoGuardada = localStorage.getItem("indicePalabra")
  /*if(!palabraEnJuegoGuardada) {
    localStorage.setItem("", indicePalabra)
    indicePalabra
  } */
  // Integrando oepradores avanzados.
  !palabraEnJuegoGuardada && localStorage.setItem("",indicePalabra )
}


  function crearCuadrados() {
    const tablero = document.getElementById("tabla");

    for (let index = 0; index < 30; index++) {
      const cuadrado = document.createElement("div");
      cuadrado.classList.add("cuadrado", "animate__animated");
      cuadrado.setAttribute("id", index + 1);
      tablero.appendChild(cuadrado);
    }
  }
//aca uso el query selector que busque en mdn, pero no estoy seguro si se usa asi.
const teclas = document.querySelectorAll(".tecladofila button");



function obtenerArrayActualizado(){
  const cantidadDePalabrasAdivinar = palabrasAdivinar.length
  return palabrasAdivinar[cantidadDePalabrasAdivinar - 1];
}
function actualizarPalabrasAdivinar(letra){
  const arrayActualizado = obtenerArrayActualizado ()
  if (arrayActualizado && arrayActualizado.length < 5 ) {
    arrayActualizado.push(letra)
  const cuadradosDisponiblesEl = document.getElementById(String(cuadradosDisponibles));
  cuadradosDisponibles = cuadradosDisponibles + 1;
  cuadradosDisponiblesEl.textContent = letra;
  }
}
function obtenerColorCuadrado(letra, index){
  const letraCorrecta = palabraEnJuego.includes(letra);
  if (!letraCorrecta){
    return "rgb(58, 58, 60)";
  }

    const letraDondeVa = palabraEnJuego.charAt(index)
    const posicionCorrecta = (letra === letraDondeVa);
    if (posicionCorrecta){
      return "rgb(83, 141, 78)";
    }
    return "rgb(181, 159, 59)";
  
}
function apretarEnter() {
  const arrayActualizado = obtenerArrayActualizado()
 /*if (arrayActualizado.length !== 5){
    alert("La palabra tiene que tener 5 letras.");
  }*/
  arrayActualizado.length !== 5 && alert("La palabra tiene que tener 5 letras.");
  const palabraActual = arrayActualizado.join("") 
  //esto lo saque de un video de youtube, no se si es correcto su uso.
  const primerLetraId = recuentoDePalabras * 5 + 1;
  const interval = 200;
  arrayActualizado.forEach((letra, index) =>{
    setTimeout(() => {
      const colorCuadrado = obtenerColorCuadrado(letra, index)
      const letraId = primerLetraId + index;
      const elementoLetra = document.getElementById(letraId)
      elementoLetra.classList.add("animate__flipInX")
      elementoLetra.style = `background-color:${colorCuadrado};border-color:${colorCuadrado}`;
    }, interval * index);
  } )

  /*if (palabraActual === palabraEnJuego) {
    alert("Felicitaciones has adivinado.!");
  }*/
  palabraActual === palabraEnJuego && alert("Felicitaciones has adivinado.!");
  /*if(palabrasAdivinar.length === 6){
    alert(`Lo siento, te quedaste sin intentos. La palabra es ${palabra}.`);
  }*/
  palabrasAdivinar.length === 6 && alert(`Lo siento, te quedaste sin intentos. La palabra es ${palabra[indicePalabra]}.`);
  palabrasAdivinar.push([]);
}


for (let i = 0; i < teclas.length; i++) {
  teclas[i].onclick = ({ target }) => {
    const letra = target.getAttribute("data-key");
    if (letra === "enter"){
      apretarEnter()
      return;
    }
    actualizarPalabrasAdivinar(letra);
  }
}

});


