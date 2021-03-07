'use strict';

//los valores pueden ser primitivos u objetos

let saludo = 'Mi nombre es Vic'; //literal String

//ademas de numeros, cadenas y boleanos, estisten otros tipos primitivos como
//null e undefined

if(lost_var === undefined){
    console.log('alguien se perdio');
}

//los Symbol son tipos primitivos de proposito especial
hi[Symbol('meaning of life')];

//Objetos

//  Arrays

let nombres = ["foo","bar"];
nombres.length;
nombres[0];
nombres[1];

//Tanto las funciones como los arrays son subtipos de object

yo = {
    nombre: 'Vic',
    apellido: 'Cruz',
    Ocupacion: 'filosofo'
};

//typeof sirve para saber el tipo de un objeto

typeof 42;                  // "number"
typeof "abc";               // "string"
typeof true;                // "boolean"
typeof undefined;           // "undefined"
typeof null;                // "object" -- oops, bug!
typeof { "a": 1 };          // "object"
typeof [1,2,3];             // "object"
typeof function hello(){};  // "function"

//tomar en cuenta que null es considerado un obj,
//lo que podria ser peligroso en comparaciones
//las funciones son tipo function y no object

//let limita el contexto de la variable
var variableGlobal = "aqui estoy";
let variableScoped = "solo en el contexto"

//aunque se recomienda el uso de let, es imperativo aprender
//a usar let, para evitar dogmatismos.

//Existe una tercer forma de declaracion, y esta es const
//no permite ser reasignada (en primitivos)
//en objetos permite que se realicen cambios en las propiedades
//pero no en el objeto completo

//reasignacion

const yo = {
    nombre: 'Vic' 
}
yo = {nombre:'alguien mas'} //asignacion - error
yo.nombre = 'Ivan' //mutabilidad - ok

//Las funciones son valores que pueden ser asignados

//Funcion como declaracion
function saludar(nombre){
    console.log(`Hola ${nombre}!`);
}

//Funcion como expresion

let despedirse = function (nombre){
    console.log(`Hola ${nombre}!`);
};

despedirse("Vic");

//las funciones tambien se pueden asignar a objetos

let otroYo ={
    comer(){
        console.log('Pizza!');
    },
    programar(){
        console.log('JS');
    },
    dormir(){
        console.log('Unas horas');
    }
};

otroYo.programar();

//Igual es diferente de equivalente, como === es distinto de ==

3 === 3.0;              // true
"yes" === "yes";        // true
null === null;          // true
false === false;        // true

42 === "42";            // false
"hello" === "Hello";    // false
true === 1;             // false
0 === null;             // false
"" === null;            // false
null === undefined;     // false

//la principal diferencia es que === no permite cohercion

//Se podria pensar que en la moyoria de los casos es recomendable
//utilozar === sobre ==, pero hay casos donde "miente"

NaN === NaN;            // false
0 === -0;               // true

//es mejor evitar utilizar === en ambos casos
//en contraparte utilizar .isNaN() y Object.is()

//La comparacion estricta de objetos === es por refencia
//y no estructural

let x = [1,2,3];
y = [1,2,3];

x === y; //false
x = y;
x === y; //true

//Comparacion cohercitiva
//Antes de comparar, realiza una conversion
//si los valores que se estan comparando son iguales, actua igual que ===
//evitar uso con objetos
// los peradores < > permiten cohercion cuando los tipos son distintos

9 < "10" //true

//generalmente estos operadores funcionan bien con numeros
//cuando se trata de cadenas, ordenan alfabeticamente

"9" < "10" //false

//clases
class Publication {
    constructor(title,author,pubDate) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }

    print() {
        console.log(`
            Title: ${ this.title }
            By: ${ this.author }
            ${ this.pubDate }
        `);
    }
}

//Mediante extends se define la herencia y se puede acceder
//a los constructores y metodos del parent con super()

class BlogPost extends Publication {
    constructor(title,author,pubDate,URL) {
        super(title,author,pubDate);
        this.URL = URL;
    }

    print() {
        super.print();
        console.log(this.URL);
    }
}

//ESM (ES modules) introducidos en ES6, no instancian
//son singleton

export function create(title,author,pubDate) {
    var publicAPI = {
        print() {
            printDetails(title,author,pubDate);
        }
    };

    return publicAPI;
}

//loop for...of

let numeros = [1,2,3];

for(let numero of numeros){
    console.log(numero);
}

//existen 2 operadore simetricos para iteradores, spread y gather
//aplican a arrays y listas de argumentos

let valores = [... numeros];
function doSomething(num){
    console.log(num);
}
doSomething(...numeros);

//Iterables en JS
//Strings, Arrays, Maps, sets, etc

//for ... of se puede aplicar a arrays
for (let val of arr) {
    console.log(`Array value: ${ val }`);
}

//al ser iterables, los arrays se pueden copiar, 
//mediante el operador spread
var arrCopy = [ ...arr ];

//tambien se pueden ontener los elementos de uan cadena
var greeting = "Hello world!";
var chars = [ ...greeting ];
chars;
// [ "H", "e", "l", "l", "o", " ",
//   "w", "o", "r", "l", "d", "!" ]

//Un mapa es una estructura de datos llave/valor
//se puede consumir en un for mediante la [desestructuracion de arrays]
//generalmente se una un objeto como llave

var mapa = new Map()
mapa.set("obj1", "hola");
mapa.set("obj2", "mundo");

for(let [nomObj, obj] of mapa){
    console.log(`${nomObj} contiene ${obj}`);
}

//iterador de solo valores, mediante el uso de values()
for(let obj of mapa.values()){
    console.log(obj);
}

//para obtener una pareja de indice y valor en arrays, mediante entries()
let arrayNumeros = [1,2,3,4];
for(let [idx, val] of arrayNumeros.entries()){
    console.log(`${idx}: ${val}`);
}

//Closures
//De manera practica se puede decir que un closure es cuando una funcion recuerda y sigue
//accediendo a variables fuera de su scope

function saludar(mensaje){
    return function quien(nombre){
        console.log(`${mensaje} para ${nombre}`);
    }
}

let hola = saludar("Hola");// la funcion quien se asigna a hola, con el parametro mensaje = "Hola"
let adios = saludar("adios");

hola("Vic");
adios("Vic");


//La "la instancia" de las funciones mantiene el scope, este scope es el closure

//lo que se mantiene en el closure no es un snapshot, si no las variables en su propio contexto
//de tal manera que si la funcion hija modifica las variables de la funcion padre, estas se mantienen
function contador(incremento=1){
    let avance = 0;
    return function incrementaContador(){
        avance = avance + incremento;
        return avance;
    }
}

let incrementar1 = contador(1);
let incrementar3 = contador(3);
let incrementar10 = contador(10)

console.log(incrementar1());
console.log(incrementar1());
console.log(incrementar3());
console.log(incrementar3());
console.log(incrementar10());

//this esta definida por el contexto dinamico, en el que se esta ejecutando una funcion o
//un valor es declarado, no depende de donde se coloca la funcion, si no donde se ejecuta

function accion(horario){
    return function saludar(){
        console.log(`${horario} ${this.nombre}`);
    }
}

let unaAccion = accion('Buenas tardes');

unaAccion(); // Buenas tardes undefined

//si se invoca desde un objeto

let vic = {
    nombre: 'Victor'
};

vic.unaAccion(); // Buenas tardes Victor

//tambien se puede invocar con call

unaAccion.call(vic); // Buenas tardes Victor

//hay que tener en cuenta que es de vital importancia la comprension de las funciones this-aware
//y el dinamismo del scope

//Prototype

//mientras this es una funcion de ejecucion, prototype es una funcion de objeto
//en especifico una resolucion de acceso a una propiedad

//un prototypo es la relacion "oculta" entre dos objetos, aunque existen metodos para exponerla y observarla
//el prototipo suge cuando u objeto es creado y se vincula a un objeto existente

//las cadenas de objetos se conocen como "prototype chain"

//el motivo de esta relacion es delegar tareas a otro objeto, que no tiene naturalmente definidas dichas tareas

let tarea = {
    materia: "Matematicas",
    tema: "polinomios"
}

tarea.toString(); //delgacion de tarea a Object.prototype, ya que tarea no define ningun miembro toString()

//Para crear una relacion de prototipo se utiliza Object.create()

let cafe = {
    tipo: 'expreso'
};

let kaffe = Object.create(cafe);

console.log(kaffe.tipo);

//Si se modifica el valor de un objeto, afecta solo al objeto y no a la cadena completa

let clase = {
    horario: "tarde"
}

let otraClase = Object.create(clase);

otraClase.horario = 'noche';

console.log(clase.horario, otraClase.horario);

//El uso de this, tambien tiene un importante uso en la delegacion de prototipos

let programar = {
    mensaje(){
        console.log(`Estoy programando en ${this.lenguaje}`);
    }
}

//usan prototipo de programar y asignan su propia propiedad lenguaje

let programarEnJava = Object.create(programar);
programarEnJava.lenguaje = 'java';
programarEnJava.mensaje();

let programarEnJS = Object.create(programar);
programarEnJS.lenguaje = 'JS';
programarEnJS.mensaje();
