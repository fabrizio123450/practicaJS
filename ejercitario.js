/* Variables y tipo de datos
Lee las instrucciones de cada comentario y escribí el código para realizar la tarea */


//Crea una variable numero y asígnale un valor de tipo number.
let numero = 1;

//Crea una variable texto y asígnale un valor de tipo string.
let texto = "string";
//Crea una variable verdadero y asígnale un valor de tipo boolean que represente una afirmación verdadera.
let verdadero = true;
//Crea una variable falso y asígnale un valor de tipo boolean que represente una afirmación falsa.
let falso = false;
//Crea una variable nulo y asígnale un valor de tipo null.
let nulo = null;
//Crea una variable indefinido y asígnale un valor de tipo undefined.
let indefinido = undefined;
//Crea una variable arreglo y asígnale un arreglo con varios valores de diferentes tipos de datos.
let arreglo = ["abc", 1, true, null, undefined];
//Imprime en la consola el valor de la variable número y el tipo de dato que almacena.
console.log(numero, typeof numero);
//Imprime en la consola el valor de la variable texto y el tipo de dato que almacena.
console.log(texto, typeof texto);
//Imprime en la consola el valor de la variable verdadero y el tipo de dato que almacena.
console.log(verdadero, typeof verdadero);
//Imprime en la consola el valor de la variable falso y el tipo de dato que almacena.
console.log(falso, typeof falso);
//Imprime en la consola el valor de la variable nulo y el tipo de dato que almacena.
console.log(nulo, typeof nulo);
//Imprime en la consola el valor de la variable indefinido y el tipo de dato que almacena.
console.log(indefinido, typeof indefinido);
//Imprime en la consola el valor de la variable arreglo y el tipo de dato que almacena.
console.log(arreglo, typeof arreglo);



/*Decisiones en javascript (if,if else, switch)*/

//Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor, menor o igual a 10.
const entrada = prompt("Ingrese un número:");
const numeroEntrada =parseFloat(entrada);
if (isNaN(numeroEntrada)) {
    console.log("Eso no es un número válido.");
}else{
    switch(true){
        case numeroEntrada > 10:
            console.log(numeroEntrada + " es mayor a 10");
            break;
        case numeroEntrada < 10:
            console.log(numeroEntrada + " es menor a 10");
            break;
        default:
            console.log(numeroEntrada + " es igual a 10");
            break;
    }
}

//Escribe un programa que solicite al usuario que ingrese un número y verifique si es par o impar.
if(!isNaN(numeroEntrada)){
   console.log( numeroEntrada % 2 === 0 ? "par" : "impar");
}

//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.
const letra = prompt("Ingrese una letra:");
let vocales = ['a', 'e', 'i', 'o', 'u']
if (isNaN(letra) && letra.length === 1) {
    console.log( vocales.includes(letra.toLowerCase()) ? "vocal" : "consonante")
   
}
//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.
if (isNaN(letra) && letra.length === 1) {
    console.log( vocales.includes(letra.toLowerCase()) ? "vocal" : "consonante")
   
}
//Escribe un programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad.
const edad = prompt("Ingrese una edad:");
const edadEntrada =parseFloat(edad);
if (!isNaN(edadEntrada)) {
    console.log(edadEntrada >= 18 ? "Eres mayor de edad" : "Eres menor de edad");
}

//Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y muestre un mensaje en la consola indicando el día de la semana correspondiente.
const dia = prompt("ingrese un número del 1 al 7 ");
const diaEntrada =parseFloat(dia);
const diaSemana =["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
if (!isNaN(diaEntrada)) {
    if(diaEntrada <= 7 && diaEntrada >= 1){
        console.log(diaSemana[diaEntrada-1]);
    }else{
        console("numero no valido");
    }
}


//Funciones

//Escribe una función que tome dos números como argumentos y devuelva su suma.
function sumaDos(a, b){
    console.log("la suma de " + a, "y "+ b + " es", a+b) 
}
//Escribe una función que tome un número como argumento y devuelva true si es par o false si es impar.
function esPar(a){
    console.log( a % 2 === 0 ? true : false);
}
//Escribe una función que tome un array de números como argumento y devuelva la suma de sus elementos.
function esMayaorLista(lista){
    let mayor = lista[0]; 

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
    }

    console.log("El mayor es " + mayor);
}
//Escribe una función que tome un array de strings como argumento y devuelva la longitud del string más largo.
function esMayaorString(lista){
    let mayor = lista[0]; 

    for (let i = 1; i < lista.length; i++) {
        if (lista[i].length > mayor.length) {
            mayor = lista[i];
        }
    }

    console.log("El mayor es " + mayor);
}
//Escribe una función que tome un objeto como argumento y devuelva un array con los valores de todas sus propiedades.
const miObjeto = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Ejemploville"
};




//Vectores

//Escribe una función que tome un array de números como argumento y devuelva el número más grande.

//Escribe una función que tome un array de números como argumento y devuelva un array con los números ordenados de menor a mayor.

//Escribe una función que tome dos arrays como argumentos y devuelva un array que contenga los elementos comunes entre ambos.

//Escribe una función que tome un array de strings como argumento y devuelva un nuevo array que contenga los strings convertidos a mayúsculas.

//Escribe una función que tome un array de números como argumento y devuelva un nuevo array que contenga la suma acumulativa de sus elementos.




//Bucles

//Escribe un bucle for que imprima en la consola los números del 1 al 10.

//Escribe un bucle while que imprima en la consola los números del 1 al 5.

//Crea un vector con los números del 1 al 5. Escribe un bucle for que imprima en la consola cada uno de los elementos del vector.

//Crea una función que reciba un número n y devuelva la suma de todos los números del 1 al n. Utiliza un bucle for para calcular la suma y muestra el resultado en la consola.

//Crea una función que reciba un vector y devuelva la suma de todos sus elementos. Utiliza un bucle while para calcular la suma y muestra el resultado en la consola.





//DOM y eventos

//Crea un archivo HTML con un botón y un div vacío. Usa JavaScript para agregar un mensaje al div cuando se hace clic en el botón.

//Crea una función que cambie el color de fondo de un elemento HTML a rojo cuando el mouse se mueve sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie el tamaño de fuente de un elemento HTML cuando se presiona una tecla en el teclado. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie el contenido de un elemento HTML cuando se hace doble clic sobre él. Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie la imagen de fondo de un elemento HTML cuando se carga la página. Agrega esta función como un listener de evento para el body del documento.
