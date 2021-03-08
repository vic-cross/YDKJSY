'use strict';

//las expresiones regulares pueden ser definidas en 2 formas

let expresion = /\D/; //hace match con cualquier caracter en el alfabeto latino simple
let saludo = "hola";
console.log(saludo.match(expresion));

let re = new RegExp('Vic'); //hace match con la cadena Vic
let cadena = 'Hay una secuencia escondida Vic_aqui';
console.log(cadena.match(re));

//Aserciones

//^ - inicio de cadena, si es un grupo denota negacion
//$ - marca el final de la cadena
//\b - delimita el inicio o final de palabra
//\B - se encuentre en medio de la palabra

//aunque el caracter ? tiene uso como asercion, tambien puede ser un cuantificador

//x(?=y) denota que debe de existir y despues de x  //asercion anticipada
//x(?!y) no debe de existir y seguido de x          //asercion anticipada negativa
//(?=y)x denota que debe de existir y antes de x  //asercion anticipada inversa
//(?!y)x no debe de existir y antes de x          //asercion anticipada negativa inversa


//^ para marcar el inicio de la entrada

let expresion1 = /^M/;
//Todas las frutas que incian con M en el array
let array1 = ["Manzana","fresa","Mandarina"];
let frutasSeleccionadas = array1.filter(fruta=> expresion1.test(fruta));
console.log(frutasSeleccionadas);

let expresion2 = /^[^M]/; //se utiliza la asercion como inicio de cadena y negacion de grupo
//selecciona las frutas que No inician con M
let frutasSeleccionadas = array1.filter(fruta=> expresion1.test(fruta));
console.log(frutasSeleccionadas);


//Clases de caracteres

//. - concuerda con cualquier caracter excepto terminadores de linea
// \d - numeros, equivale al rango [0-9]
// \D - letras del alfabeto latino basico equivale al rango [^0-9]
// \w - equivale a [A-Za-z0-9] alfabeto latino basico
// \W - equivale a [^A-Za-z0-9]
// \s - equivale a un espacio en blanco,tab, avance de pagina, etc. [ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]
// \S - equivale a cualquier cosa que no sea un espacio en blanco. [^ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]
// \ - caracter de escape para simbolos de regexp

let datosAleatorios = "015 354 8787 687351 3512 8735";
let expCuatroDigitos = /\b\d{4}\b/g;
let numCuatroDigitos = datosAleatorios.match(expCuatroDigitos);
console.log(numCuatroDigitos);


//Grupos y rangos

//x|y - coincide con la cadena que contenga x o y
//[xyz] [a-c] - juego de caracteres que puede contener la cadena, tambien puede ser un rango, como [0-9] que equivale a \d
//[^xyz] [^a-c] - juego de caracteres que NO puede contener la cadena
//(x) - grupo de captura a la que aplica la expresion, penaliza rendimiento, usar con cuidado
//\n - referencia inversa a la ultima subcadena del parentesis
//(?:x) - grupo de no captura

//busqueda de nombre y apellido

let listaPersonas = `nombre:victor, apellido:cruz nombre:ivan, apellido:granillo`;
let expresionNombres = /nombre:(\w+), apellido:(\w+)/g;
let coincidencias;
while((coincidencias = expresionNombres.exec(listaPersonas)) !== null){
    console.log(`Hola ${coincidencias[1]} ${coincidencias[2]}`);
}

//Cuantificadores
//Indican el numero de coincidencias

//x* - indica 0 o mas veces el elemento x
//x+ - indica 1 o mas veces el elemento x
//x? - incia 0 o 1 vez el x, por ejemplo e?le? coicide con l,el,le,ele
//x{n} - indica que x debe de aparecer n veces
//x{n,} - indica que x debe de aparecer AL MENOS n veces
//x{n,m} - indica que x debe de aparecer MINIMO n y MAXIMO m

//los contadores son 'greedy' por naturaleza, pero ? evita dicho comportamiento
//por ejemplo dada la cadena <hola>mundo</hola>
//la expresion <.*> coincide con  <hola>mundo</hola> (greedy)
//la expresion <.*?> coincide con  <hola>
// x*?
// x+?
// x??
// x{n}?
// x{n,}?
// x{n,m}?

//banderas

//la estructura es la siguiente: /patron/banderas

//g - busqueda global
// i - case insensitive
// m - busqueda multilinea
// s - permite que . coincida con caracteres de nueva linea
// u - tratar patron como secuencia unicode
// y - busqueda sticky
