document.addEventListener("DOMContentLoaded", () => {
    crearCuadrados();



  let nombre = prompt("Ingrese su nombre Aqui");
  if (nombre == "") {
    alert("No ingresaste ningun nombre.");
  }
  else {
    alert("Bienvenido "+nombre+" disfrute del Wordle!.");
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

for (let i = 0; i < teclas.length; i++) {
    teclas[i].onclick = ({ target }) => {
      const letra = target.getAttribute("data-key");
      console.log(letra);
    }
}


});


