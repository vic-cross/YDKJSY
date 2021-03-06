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