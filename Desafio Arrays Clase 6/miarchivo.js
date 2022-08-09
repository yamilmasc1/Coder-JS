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
//no se si esta bien usado esto.
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
}






