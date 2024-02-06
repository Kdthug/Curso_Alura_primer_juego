/*
let numeroMaximo = 10;
let numeroUsado = [];
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if(numeroDeUsuario === numeroSecreto) {
        
        asignarTextoElemento("p", `Felicidades adivinaste el número en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero es menor");
        }else {
            asignarTextoElemento("p", "El numero es mayor")
        }
        intentos++;
        limpiarNumero();
    }

    return;
}

function limpiarNumero() {
    document.querySelector("#valorUsuario").value = "";
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1;
    if (numeroUsado.length == numeroMaximo){
        asignarTextoElemento("p", "ya jugaste todos los numeros");
    }else{
        if (numeroUsado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            numeroUsado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionInicial() {
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}..`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function iniciarJuego() {
    limpiarNumero();
    condicionInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);

}

condicionInicial();*/

/*
function imc (altura, peso) {
    let resultado = peso / (altura * altura);
    return resultado;
}*/
/*
function factorialRecursion(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }else {
        return numero * factorialRecursion(numero - 1);
    }
}

let numero = 5;
let calculo = factorialRecursion(numero);
console.log(`El factorial de ${numero} es ${calculo}`);*/
/*
function dolarPeso(cantidadDolar) {
    let clp = cantidadDolar * 900;
    return clp;
}

let cantidadDolar = 50;
let pesos = dolarPeso(cantidadDolar);
console.log(pesos);*/
/*
function areaPerimetro(alto, ancho) {
    let area = alto * ancho;
    let perimetro = (2 * alto) + (2 * ancho);
    console.log(`el perimetro de la sala es ${perimetro} y el area es ${area}`)
}

let alto = 5;
let ancho = 2;
areaPerimetro(alto, ancho);*/
/*
function salaCircular(radio) {
    let perimetro = 2 * 3.14 * radio;
    let area = 3.14 * (radio * radio);
    console.log(`el perimetro de la sala es ${perimetro} y el area es ${area}`)
}

let radio = 5;
salaCircular(radio);*/
/*
function tablaMultiplicar(numero) {
    for (var i = 1; i <= 12;  i++){
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
    }
}

let numero = 5;
tablaMultiplicar(numero);*/
/*
let listaGenerica = [];
let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

function mostrarArray() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++){
        console.log(lenguagesDeProgramacion[i]);
    }
}
mostrarArray();

function mostrarArrayInversa() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        
        console.log(lenguagesDeProgramacion[i]);
    }
}
mostrarArrayInversa();*/
/*
let listaNumeros = [1, 2, 5, 6];

function promedioNumeros(listaNumeros){
    let sum = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        sum += listaNumeros[i]; 
    }
    return sum/listaNumeros.length;
}

let resultado = promedioNumeros(listaNumeros);

console.log(resultado);*/
/*
let arrayNumero = [10, 5, 20, 50, 35];

function numeroMayorMenor(arrayNumero) {
    let largest = arrayNumero[0];
    let smaller = arrayNumero[0];

    for (i = 0; i < arrayNumero.length; i++){
        if (arrayNumero[i] > largest ){
            largest = arrayNumero[i];
        }
        if (arrayNumero[i] < smaller){
            smaller = arrayNumero[i];
        }
    }

    
    
    console.log(largest);
    console.log(smaller);

}

numeroMayorMenor(arrayNumero);*/

/*
let listaNumeros = [1, 2, 5, 6];

function promedioNumeros(listaNumeros) {
    let sum = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        sum += listaNumeros[i];
    }
    return sum;
}

let resultado = promedioNumeros(listaNumeros);

console.log(resultado);*/
/*
function posicionElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++){
        if (elemento === lista[i]){
            return i;
        }
            
        
    }
    return -1;
}
let lista = [5, 7, 9, 41];
let posicion = posicionElemento(lista, 9);
console.log(posicion);*/
/*
var array1 = [1, 2, 3, 4];
var array2 = [5, 6, 7, 8];

var sum = array1.map(function (num, idx) {
    return num + array2[idx];
});

console.log(sum);*/

let array = [1, 4, 9, 16];

function calculoCuadrado (array) {
    let cuadrado = array.map((x) => x * x);
    console.log(cuadrado)
}

calculoCuadrado(array);








