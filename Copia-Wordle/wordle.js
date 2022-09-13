//Variables:
let palabrasAdivinar = [[]];
let cuadradosDisponibles = 1;
let indicePalabra = 0;
const URL = "palabrasEnJuego.json";
let palabra = ""
let palabraEnJuego = ""
let recuentoDePalabras = 0;
const teclas = document.querySelectorAll(".tecladofila button");

const SUCCESS_EVENT = "success";
const SUCCESS_MESSAGE = "Adivinaste la palabra";
const SUCCESS_TITLE = "Título exitoso";

const FAIL_EVENT = "error";
const ERROR_MESSAGE = "No adivinaste la palabra";
const LOST_MESSAGE = `Lo siento, te quedaste sin intentos. La palabra es ${palabraEnJuego}`;
const ERROR_TITLE = "Título fallo";

const INFO_EVENT = "info";
const MINIMUM_LETTER_MESSAGE = "Minimo 5 letras";
const MINIMUM_LETTER_TITLE = "Requerido";

document.addEventListener("DOMContentLoaded", () => {
  crearCuadrados()
  buscarLocalStorage();
  getData(URL)
});

//Cree una funcion para obtener palabras a travez del fetch como me recomendaste.
function getData(URL) {
  fetch(URL)
    .then((resp) => resp.json())
    .then(({ palabras }) => palabra = palabras)
};

const alertMessage = (title, message, event) => Swal.fire(`${title}`, `${message}`, `${event}`);

function buscarLocalStorage() {
  const palabraEnJuegoGuardada = localStorage.getItem("indicePalabra")
  !palabraEnJuegoGuardada && localStorage.setItem("", indicePalabra)
};

function crearCuadrados() {
  const tablero = document.getElementById("tabla");

  for (let index = 0; index < 30; index++) {
    const cuadrado = document.createElement("div");
    cuadrado.classList.add("cuadrado", "animate__animated");
    cuadrado.setAttribute("id", index + 1);
    tablero.appendChild(cuadrado);
  };
};

function obtenerArrayActualizado() {
  const cantidadDePalabrasAdivinar = palabrasAdivinar.length;
  return palabrasAdivinar[cantidadDePalabrasAdivinar - 1];
};

function actualizarPalabrasAdivinar(letra) {
  const arrayActualizado = obtenerArrayActualizado()
  if (arrayActualizado && arrayActualizado.length < 5) {
    arrayActualizado.push(letra);
    const cuadradosDisponiblesEl = document.getElementById(String(cuadradosDisponibles));
    cuadradosDisponibles = cuadradosDisponibles + 1;
    cuadradosDisponiblesEl.textContent = letra;
  };
};

function obtenerColorCuadrado(letra, index) {

  const letraCorrecta = palabraEnJuego.includes(letra);
  const letraDondeVa = palabraEnJuego.charAt(index);
  const posicionCorrecta = (letra === letraDondeVa);

  if (!letraCorrecta) {
    return "rgb(58, 58, 60)";
  } else if (posicionCorrecta) {
    return "rgb(83, 141, 78)";
  } else {
    return "rgb(181, 159, 59)";
  };
};

function apretarEnter() {

  const arrayActualizado = obtenerArrayActualizado();
  const palabraActual = arrayActualizado.join("");
  const primerLetraId = recuentoDePalabras + 1;
  const interval = 200;
  palabraEnJuego = palabra[indicePalabra];
  arrayActualizado.length !== 5 && alertMessage(MINIMUM_LETTER_TITLE, MINIMUM_LETTER_MESSAGE, INFO_EVENT);
  arrayActualizado.forEach((letra, index) => {

    setTimeout(() => {
      const colorCuadrado = obtenerColorCuadrado(letra, index);
      const letraId = primerLetraId + index;
      const elementoLetra = document.getElementById(letraId);
      elementoLetra.classList.add("animate__flipInX");
      elementoLetra.style = `background-color:${colorCuadrado};border-color:${colorCuadrado}`;
    }, interval * index);
  });

  palabraActual === palabraEnJuego && alertMessage(SUCCESS_TITLE, SUCCESS_MESSAGE, SUCCESS_EVENT);
  palabrasAdivinar.length === 7 && alertMessage(ERROR_TITLE, LOST_MESSAGE, FAIL_EVENT);
  palabrasAdivinar.push([]);
  
  recuentoDePalabras += 5;
  indicePalabra += 1;
};

for (let i = 0; i < teclas.length; i++) {
  teclas[i].onclick = ({ target }) => {
    const letra = target.getAttribute("data-key");
    if (letra === "enter") {
      apretarEnter()
      return;
    }
    actualizarPalabrasAdivinar(letra);
  }
};