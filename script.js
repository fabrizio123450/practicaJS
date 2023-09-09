console.log("Hola Mundo");
let miVariable = 123;
console.log(miVariable);
let a = 4;
let b = 5;
let c = 6;
let aux = 0;

if (a > b && a > c){
    console.log(a);
}else if (c > b && c > a){
    console.log(c);
}else{
    console.log(b);
}

function esMayor(a, b, c){
    if (a > b && a > c){
        console.log("el mayor es "+ a);
    }else if (c > b && c > a){
        console.log("el mayor es "+ c);
    }else{
        console.log("el mayor es "+ b);
    }
}

function esMayaorLista(lista){
    let mayor = lista[0]; 

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
    }

    console.log("El mayor es " + mayor);
}

