// ============================================================================
// GUÍA 1: VARIABLES Y TIPOS DE DATOS EN JAVASCRIPT
// Este archivo solo es una guia no es importante en produccion solo para aprender
// ============================================================================
// Esta guía te enseña cómo declarar variables y los diferentes tipos de datos

// ===== 1. DECLARACIÓN DE VARIABLES =====

// === VAR (forma antigua, ya no se recomienda usar) ===
// 'var' declara una variable con alcance de función o global
// Puede causar problemas porque puede redeclararse y tiene "hoisting"
var variables = 1;
var variables = 1; // Variable con valor inicial
console.log(miPrimeraVariable); // Imprime: Hola

// === LET (forma moderna recomendada) ===
// sirven para poder poner comentarios en el codigo
// 'let' declara una variable que PUEDE cambiar su valor después
// Tiene alcance de bloque (solo existe dentro de las llaves {} donde se declara)
let edad = 25;
let MiNombre = "Juan";
let miPrimeraVariable = "Hola"; // Variable texto
console.log(edad); // Imprime: 25
edad = 26; // Podemos cambiar el valor de 'let'
console.log(edad); // Imprime: 26

// === CONST (para valores constantes) ===
// 'const' declara una variable que NO puede cambiar su valor después de asignarse
// También tiene alcance de bloque
// SIEMPRE debe inicializarse al declararla
const PI = 3.14159; // Constante matemática
console.log(PI); // Imprime: 3.14159
// PI = 3.14; // ❌ ERROR: No se puede reasignar una constante

// ===== 2. TIPOS DE DATOS PRIMITIVOS =====

// === STRING (Cadenas de texto) ===
// Se usan comillas simples 'texto' o dobles "texto" o backticks `texto`
let nombre = "Luis"; // String con comillas dobles
let apellido = 'García'; // String con comillas simples
let mensaje = `Hola ${nombre}`; // Template literal con backticks (permite insertar variables)
console.log(mensaje); // Imprime: Hola Luis

// Métodos útiles de strings:
let textoEjemplo = "JavaScript es genial";
console.log(textoEjemplo.length); // .length devuelve la cantidad de caracteres: 20
console.log(textoEjemplo.toUpperCase()); // .toUpperCase() convierte a MAYÚSCULAS
console.log(textoEjemplo.toLowerCase()); // .toLowerCase() convierte a minúsculas
console.log(textoEjemplo.includes("Java")); // .includes() verifica si contiene un texto: true
console.log(textoEjemplo.substring(0, 10)); // .substring() extrae parte del texto: "JavaScript"

// === NUMBER (Números) ===
// JavaScript solo tiene un tipo para números (enteros y decimales)
let entero = 42; // Número entero
let decimal = 3.14; // Número decimal (con punto, no coma)
let negativo = -10; // Número negativo
let grande = 1000000; // Número grande

// Operaciones matemáticas básicas:
let suma = 10 + 5; // Suma: 15
let resta = 10 - 5; // Resta: 5
let multiplicacion = 10 * 5; // Multiplicación: 50
let division = 10 / 5; // División: 2
let modulo = 10 % 3; // Módulo (resto de división): 1
let potencia = 2 ** 3; // Potencia (2 elevado a 3): 8

console.log("Suma:", suma);
console.log("Resto:", modulo);

// Métodos útiles con números:
let numeroDecimal = 3.7;
console.log(Math.round(numeroDecimal)); // Math.round() redondea: 4
console.log(Math.floor(numeroDecimal)); // Math.floor() redondea hacia abajo: 3
console.log(Math.ceil(numeroDecimal)); // Math.ceil() redondea hacia arriba: 4
console.log(Math.max(1, 5, 3, 9, 2)); // Math.max() devuelve el mayor: 9
console.log(Math.min(1, 5, 3, 9, 2)); // Math.min() devuelve el menor: 1
console.log(Math.random()); // Math.random() devuelve número aleatorio entre 0 y 1

// === BOOLEAN (Valores de verdad) ===
// Solo puede ser true (verdadero) o false (falso)
// Se usan en condiciones y lógica
let esMayorDeEdad = true; // Valor verdadero
let tieneLicencia = false; // Valor falso
let estaLloviendo = true;

console.log(esMayorDeEdad); // Imprime: true

// Comparaciones que devuelven booleanos:
let resultado1 = 5 > 3; // Mayor que: true
let resultado2 = 5 < 3; // Menor que: false
let resultado3 = 5 >= 5; // Mayor o igual que: true
let resultado4 = 5 <= 4; // Menor o igual que: false
let resultado5 = 5 === 5; // Igual estricto (valor y tipo): true
let resultado6 = 5 !== 3; // Diferente estricto: true
let resultado7 = 5 == "5"; // Igual débil (solo valor): true
let resultado8 = 5 === "5"; // Igual estricto (valor y tipo): false

console.log("5 > 3:", resultado1);
console.log("5 === '5':", resultado8);

// === NULL (Valor nulo intencionalmente vacío) ===
// Representa ausencia intencional de valor
let valorNulo = null; // Variable sin valor asignado intencionalmente
console.log(valorNulo); // Imprime: null

// === UNDEFINED (Valor no definido) ===
// Variable declarada pero sin valor asignado
let sinValor; // Solo declarada, no inicializada
console.log(sinValor); // Imprime: undefined

// ===== 3. CONVERSIÓN DE TIPOS =====

// === De String a Number ===
let textoNumero = "42"; // Esto es un string
let numeroConvertido = Number(textoNumero); // Convierte string a number
let numeroParseInt = parseInt("100px"); // parseInt extrae número entero: 100
let numeroParseFloat = parseFloat("3.14abc"); // parseFloat extrae número decimal: 3.14

console.log(typeof textoNumero); // typeof devuelve el tipo: "string"
console.log(typeof numeroConvertido); // Imprime: "number"

// === De Number a String ===
let numero = 42;
let textoDesdeNumero = String(numero); // Convierte number a string
let textoConMetodo = numero.toString(); // .toString() también convierte a string

console.log(typeof numero); // Imprime: "number"
console.log(typeof textoDesdeNumero); // Imprime: "string"

// === Conversión a Boolean ===
// Valores "falsy" (se consideran false): 0, "", null, undefined, NaN, false
// Todos los demás valores son "truthy" (se consideran true)
let booleano1 = Boolean(1); // true (número diferente de 0)
let booleano2 = Boolean(0); // false (cero es falsy)
let booleano3 = Boolean("texto"); // true (string con contenido)
let booleano4 = Boolean(""); // false (string vacío es falsy)

console.log(Boolean(100)); // Imprime: true
console.log(Boolean("")); // Imprime: false

// ===== 4. OPERADORES CON VARIABLES =====

// === Operadores de asignación ===
let x = 10; // Asignación simple
x += 5; // Equivalente a: x = x + 5, ahora x es 15
x -= 3; // Equivalente a: x = x - 3, ahora x es 12
x *= 2; // Equivalente a: x = x * 2, ahora x es 24
x /= 4; // Equivalente a: x = x / 4, ahora x es 6

console.log(x); // Imprime: 6

// === Operadores de incremento y decremento ===
let contador = 0;
contador++; // Incrementa en 1 (post-incremento): ahora es 1
++contador; // Incrementa en 1 (pre-incremento): ahora es 2
contador--; // Decrementa en 1 (post-decremento): ahora es 1
--contador; // Decrementa en 1 (pre-decremento): ahora es 0

console.log(contador); // Imprime: 0

// === Operadores lógicos ===
// && (AND): verdadero solo si AMBOS son true
// || (OR): verdadero si AL MENOS UNO es true
// ! (NOT): invierte el valor booleano

let a = true;
let b = false;

console.log(a && b); // AND: false (porque b es false)
console.log(a || b); // OR: true (porque a es true)
console.log(!a); // NOT: false (invierte true a false)
console.log(!b); // NOT: true (invierte false a true)

// ===== 5. ALCANCE DE VARIABLES (SCOPE) =====

// === Alcance global ===
// Variables declaradas fuera de funciones son globales
let variableGlobal = "Soy global"; // Accesible desde cualquier parte

function mostrarGlobal() {
    console.log(variableGlobal); // Puede acceder a variable global
}

mostrarGlobal(); // Imprime: Soy global

// === Alcance de bloque ===
// let y const tienen alcance de bloque (dentro de {})
if (true) {
    let variableDeBloque = "Solo existo aquí"; // Solo existe dentro del if
    console.log(variableDeBloque); // Funciona aquí
}
// console.log(variableDeBloque); // ❌ ERROR: no existe fuera del bloque

// === Alcance de función ===
function miFuncion() {
    let variableDeFuncion = "Solo en la función"; // Solo existe dentro de la función
    console.log(variableDeFuncion); // Funciona aquí
}

miFuncion();
// console.log(variableDeFuncion); // ❌ ERROR: no existe fuera de la función

// ===== 6. BUENAS PRÁCTICAS =====

// ✅ USA let para variables que cambian
let precioProducto = 100;
precioProducto = 120; // Puede cambiar

// ✅ USA const para valores que no cambian
const IVA = 0.16; // Las constantes suelen escribirse en MAYÚSCULAS
const NOMBRE_EMPRESA = "Mi Empresa";

// ✅ Nombres de variables descriptivos (en camelCase)
let nombreCompleto = "Juan Pérez"; // ✅ Bien
let n = "Juan Pérez"; // ❌ Mal (no descriptivo)

// ✅ Una variable por línea
let primerNombre = "Luis";
let segundoNombre = "Carlos";

// ❌ Evitar múltiples variables en una línea
let a1 = 1, b1 = 2, c1 = 3; // ❌ Menos legible

// ===== FIN DE LA GUÍA 1 =====
console.log("\n✅ Guía 1 completada: Variables y Tipos de Datos");

