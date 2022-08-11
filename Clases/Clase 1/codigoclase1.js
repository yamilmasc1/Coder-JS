//declaracion de variables en JS( comentario corto)
let clima;
// inicializacion de la variable
clima="helado"; //string

//declaracion e inicializacion en una linea
let temperatura=10;//int o entero

temperatura=12;

//const = no varian en la ejecucion del programa
const PI=3.1416;

//camel case cuando son 2 palabras o masS

//operaciones matematicas
let precio1=100;
let precio2=50;
let descuento=10;
let cantidad=5;

let totalPrecios = precio1 + precio2; //150p
let precioConDescuento = precio1 - descuento;//90p
let precioPor5 = precio1 * cantidad; //500p
let ivaDePrecio1 = (precio1 * 21)/100 //21p


//concatenacion de strings con el operador matematico +
let nombre="Pepe";
let apellido="Hernandez";

let nombreCompleto = nombre+apellido;//salen las dos palabras pegadas
const ESPACIO=" ";

//mixto
let curso="JavaScript";
let comision=33985;
let resultado=curso+comision; //"JavaScript33985"

//salida de datos console.log

console.log("clase 1 - Variables");
console.log("Total $ "+totalPrecios);
console.log("IVA $"+ ivaDePrecio1);
console.log("Nombre Completo del Usuario:"+nombreCompleto);
console.log("String + numero "+resultado);

//prompt - para ingresar datos

//let equipoFavorito=prompt("Ingresa tu equipo favorito");
//console.log("Tu equipo favorito es: "+equipoFavorito);

//salida de datos Alert

//alert("Tu equipo favorito es: "+equipoFavorito);

//EJERCICIO: perdir al usuario su anio de nacimiento y decirle luego que edad tiene
const ANIOACTUAL=2022;
let anioDeNacimiento = parseInt(prompt("Ingresa tu anio de nacimiento "));
let edadUsuario=ANIOACTUAL-anioDeNacimiento;
alert("Tu tienes "+edadUsuario+" anios");







/*

comentario largo


*/