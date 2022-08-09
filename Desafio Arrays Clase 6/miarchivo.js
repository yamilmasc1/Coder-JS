class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
    }
    sumaAhora12 () {
        this.precio = this.precio * 1.42;
    }
    sumaAhora18 () {
        this.precio = this.precio * 1.49;
    }
    restaEfectivo () {
        this.precio = this.precio * 0.9;
    }
};

const arrayProductos = [];
arrayProductos.push(new Producto("Campera","2500"));
arrayProductos.push(new Producto("Zapatillas", "6000"));
arrayProductos.push(new Producto("Pantalon", "5500"));
console.log(arrayProductos);

for (const producto of arrayProductos) {
    console.log("El precio del producto en 12 cuotas es "+ sumaAhora12);
    console.log("El precio del producto en 18 cuotas es "+ sumaAhora18);
    console.log("El precio del producto abonando en efectivo es "+ restaEfectivo);
};





//Sumar el interes de ahora 12

/* function calcularInteres (precioCosto) {
    return (precioCosto * 1.42);
} */  
//Cambio a funcion flecha
/*const calcularInteres= ( precio ) => precio * 1.42  ;
let interes12 = calcularInteres(precioCosto);
alert ("El precio del producto en 12 cuotas fijas es: "+interes12);
console.log("El precio total del producto en 12 cuotas es: "+interes12); */



//Sumar el interes de ahora 18

/* function calcularInteres2 (precioCosto) {
    return (precioCosto * 1.49);
} */
//cambio a funcion flecha
/*const calcularInteres2= ( precio ) => precio * 1.49  ;
let interes18 = calcularInteres2(precioCosto);
alert ("El precio del producto en 18 cuotas fijas es de: "+interes18);
console.log("El precio total del producto en 18 cuotas es: "+interes18); */



//Descuento pago en efectivo o transferencia

/*function calcularPrecioEfectivo (precioCosto){
    return (precioCosto * 0.90);
} */
//cambio a funcion flecha
/*const calcularPrecioEfectivo= ( precio ) => precio * 0.90  ;
var precioContado = calcularPrecioEfectivo(precioCosto);
alert("El precio del producto abonando de contado/transferencia es: "+precioContado);
console.log("El precio de contado/transferencia es: "+precioContado); */
