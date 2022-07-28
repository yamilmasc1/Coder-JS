//Estructuras condicionales

//condicional simple
let planeta = prompt("Cual es el planeta más cercano al sol ?");
if (planeta == "mercurio"){
    console.log("Excelente !!!");
}else{
    console.log("No, es mercurio");
}

//condicionales anidados
let satelite=prompt("Cual es el satelite natural de la Tierra ?");
if(satelite == "luna"){
    console.log("Excelente !!!");
}else if(satelite == "LUNA"){
    console.log("Excelente !!!");
}else if(satelite == "Luna"){
    console.log("Excelente !!!");
}else{
    console.log("No, es la luna");
}

//otro ejemplo con numeros
//EJERCICIO: preguntamos al usuario su edad, si es menor de 18 años le mostramos "Eres menor de edad"
//si es mayor o igual a 18 años le mostramos "Eres mayor de edad"
let edad = parseInt(prompt("Ingresa tu edad"));
if(edad < 18){
    console.log("Eres menor de edad");
}else if(edad == 18){
    console.log("Acabas de empezar a ser mayor de edad")
}else{
    console.log("Eres mayor de edad")
}

let esMayorDeEdad = (edad>=18);//true or false
console.log(esMayorDeEdad);

//operador ===
let num1 = 1;
let numUno = "1";
let sonIguales = (num1 == numUno);// 1=="1"???
console.log("Son iguales??? "+sonIguales);

let sonEstrictamenteIguales = (num1 === numUno);
console.log("Son estrictamente iguales ??? "+sonEstrictamenteIguales);


//Diapo 31
let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}

//usuario y contraseña &&
let usuario = prompt("Ingrese nombre de usuario");
let password = prompt("Ingrese contraseña");

if((usuario=="pepe")&&(password=="1234")){
    console.log("Bienvenido al sistema");
}else{
    console.log("Error en usuario y/o contraseña");
}


//mercurio mejorado ||
let planeta1 = prompt("Cual es el planeta más cercano al sol ?");
if (((planeta1 == "mercurio")||(planeta1=="MERCURIO")||(planeta1=="Mercurio"))){
    console.log("Excelente !!!");
}else{
    console.log("No, es mercurio");
}

//Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.
let num = parseInt(prompt("Ingrese el numero"));
if((num>=10)&&(num<=50)){
    alert("El numero esta entre 10 y 50");
}else{
    alert("El numero está fuera de rango");
}