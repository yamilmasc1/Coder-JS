//Utilizacion del for para repetir un numero fijo de veces

let numero1 = parseInt(prompt("Ingresar un numero que sera sumado en cada repeticion"));
let suma = 0;
for(let i=0; i < 10; i++){
    let numero2 = parseInt(prompt("Inrgresar el numero para sumar"));
    suma = numero1 + numero2;
    console.log(suma);
}

//Pedir un texto mediante prompt, concatenar un valor en cada repeticion, realizar una salida por cada resultado, hasta que se ingrese ESC

let texto = prompt("Ingrese un texto aqui");
let resultado = texto;
let textoConcatenar = " ";

while (textoConcatenar != "ESC"){
    textoConcatenar = prompt("Ingrese un texto para agregar al inicial");
    resultado = resultado+" "+ textoConcatenar;
    console.log(resultado);
} //funciona el codigo pero no se si es correcto, la parte donde se pide el ESC para detenerlo.

//pedir un numero por prompt, repetir la salida 'Hola' la cantidad de veces ingresada

let numero4 = parseInt(prompt("Ingrese en numeros, la cantidad de veces que desea repetir el mensaje"));
for(let i = 1; i <= numero4; i++){
    alert("Hola");
}

