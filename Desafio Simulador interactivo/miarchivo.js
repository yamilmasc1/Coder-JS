//Solicitud del precio al cual se le agregara el interes por ahora 12/18

while (true){
    var precioCosto = parseInt(prompt("Ingrese el precio del producto"));
    if(!isNaN(precioCosto) && precioCosto != null && precioCosto !=""){
        alert ("Es un valor correcto");
        break;
    } else {
        alert ("No es un valor correcto");
        continue;
    }
}



//Sumar el interes de ahora 12

function calcularInteres (precioCosto) {
    return (precioCosto * 1.42);
}
let interes12 = calcularInteres(precioCosto);
alert ("El precio del producto en 12 cuotas fijas es: "+interes12);
console.log("El precio total del producto en 12 cuotas es: "+interes12);



//Sumar el interes de ahora 18

function calcularInteres2 (precioCosto) {
    return (precioCosto * 1.49);
}
let interes18 = calcularInteres2(precioCosto);
alert ("El precio del producto en 18 cuotas fijas es de: "+interes18);
console.log("El precio total del producto en 18 cuotas es: "+interes18);



//Descuento pago en efectivo o transferencia

function calcularPrecioEfectivo (precioCosto){
    return (precioCosto * 0.90);
}
var precioContado = calcularPrecioEfectivo(precioCosto);
alert("El precio del producto abonando de contado/transferencia es: "+precioContado);
console.log("El precio de contado/transferencia es: "+precioContado);