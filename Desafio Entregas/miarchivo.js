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
arrayProductos.push(new Producto("Campera de Nieve","2500"));
arrayProductos.push(new Producto("Zapatillas Converse", "6000"));
arrayProductos.push(new Producto("Pantalon Jean", "5500"));
arrayProductos.push(new Producto("Camisa Basica", "6500"));
console.log(arrayProductos);
/*  metodo que utilice

for (const producto of arrayProductos) {
    producto.sumaAhora12();
    console.log("El precio de los productos en 12 cuotas es de "+ producto.precio);
    alert("El precio de los productos en 12 cuotas es de "+ producto.precio);
};
for (const producto of arrayProductos) {
    producto.sumaAhora18();
    console.log("El precio de los productos en 18 cuotas es de "+ producto.precio);
    alert("El precio de los productos en 18 cuotas es de "+ producto.precio)
}
for (const producto of arrayProductos) {
    producto.restaEfectivo();
    console.log("El precio de los productos abonando en efectivo es de "+ producto.precio);
    alert("El precio de los productos abonando en efectivo es de "+ producto.precio);
}  */
// probando con maps, como me recomendo kevin.
const precioProductos = arrayProductos.map((producto) => producto.precio);
console.log(precioProductos);
const precioCuotas12 = arrayProductos.map((producto) => {
    return{
        precio: producto.precio * 1.42
    }
});
console.log(precioCuotas12);

const precioCuotas18 = arrayProductos.map((producto) => {
    return {
        precio: producto.precio * 1.49
    }
});
console.log(precioCuotas18);

const precioContado = arrayProductos.map((producto) => {
    return {
        precio: producto.precio * 0.90
    }
});
console.log(precioContado);

//simulacion del precio si comprara todos los productos

const precioTotal = arrayProductos.reduce((acc, producto) => acc + producto.precio, 0);
console.log(precioTotal);
alert ("El precio total de su compra es de $"+precioTotal);






