// ============================================================================
// GUÍA 4: FUNCIONES EN JAVASCRIPT
// ============================================================================
// Esta guía te enseña a crear y usar funciones para organizar y reutilizar código

// ===== 1. DECLARACIÓN DE FUNCIONES =====

// === Declaración de función tradicional ===
// 'function' es la palabra clave para declarar funciones
// Sintaxis: function nombreFuncion(parámetros) { código }
function saludar() {
    // Función sin parámetros
    console.log("¡Hola mundo!");
}

// Llamar/ejecutar la función
saludar(); // Imprime: ¡Hola mundo!
saludar(); // Se puede llamar múltiples veces

// === Función con parámetros ===
// Los parámetros son variables que recibe la función
function saludarPersona(nombre) {
    // 'nombre' es un parámetro
    console.log("¡Hola " + nombre + "!");
}

// Llamar función con argumento
saludarPersona("Luis"); // Imprime: ¡Hola Luis!
saludarPersona("Ana"); // Imprime: ¡Hola Ana!

// === Función con múltiples parámetros ===
function sumar(a, b) {
    // 'a' y 'b' son parámetros separados por coma
    let resultado = a + b;
    console.log("La suma es:", resultado);
}

sumar(5, 3); // Imprime: La suma es: 8
sumar(10, 20); // Imprime: La suma es: 30

// ===== 2. RETURN: DEVOLVER VALORES =====

// === Función que devuelve un valor ===
// 'return' envía un valor de vuelta al código que llamó la función
function multiplicar(a, b) {
    let resultado = a * b;
    return resultado; // Devuelve el resultado
    // Código después de return NO se ejecuta
}

let producto = multiplicar(4, 5); // Guarda el valor devuelto
console.log(producto); // Imprime: 20

// Return directamente sin variable intermedia
function restar(a, b) {
    return a - b; // Devuelve directamente la operación
}

console.log(restar(10, 3)); // Imprime: 7

// === Múltiples returns (solo se ejecuta uno) ===
function compararNumeros(a, b) {
    if (a > b) {
        return "a es mayor"; // Si es true, devuelve esto y termina
    } else if (b > a) {
        return "b es mayor"; // Si es true, devuelve esto y termina
    } else {
        return "son iguales"; // Si ninguno anterior, devuelve esto
    }
    // Código aquí nunca se ejecutaría
}

console.log(compararNumeros(5, 3)); // Imprime: a es mayor
console.log(compararNumeros(2, 8)); // Imprime: b es mayor
console.log(compararNumeros(4, 4)); // Imprime: son iguales

// === Función sin return (devuelve undefined por defecto) ===
function sinReturn() {
    console.log("Esta función no devuelve nada");
}

let valor = sinReturn(); // Imprime mensaje
console.log(valor); // Imprime: undefined

// ===== 3. PARÁMETROS POR DEFECTO =====

// Asignar valores por defecto a parámetros
function saludarConIdioma(nombre, idioma = "español") {
    // Si no se proporciona 'idioma', usa "español"
    if (idioma === "español") {
        return "¡Hola " + nombre + "!";
    } else if (idioma === "inglés") {
        return "Hello " + nombre + "!";
    }
}

console.log(saludarConIdioma("Luis")); // Usa idioma por defecto: ¡Hola Luis!
console.log(saludarConIdioma("John", "inglés")); // Usa parámetro dado: Hello John!

// Múltiples parámetros con valores por defecto
function crearPerfil(nombre, edad = 18, ciudad = "Madrid") {
    return nombre + ", " + edad + " años, de " + ciudad;
}

console.log(crearPerfil("Ana")); // Ana, 18 años, de Madrid
console.log(crearPerfil("Carlos", 25)); // Carlos, 25 años, de Madrid
console.log(crearPerfil("María", 30, "Barcelona")); // María, 30 años, de Barcelona

// ===== 4. EXPRESIONES DE FUNCIÓN =====

// Asignar una función a una variable
const dividir = function(a, b) {
    // Función anónima asignada a variable 'dividir'
    return a / b;
};

// Llamar igual que función normal
console.log(dividir(10, 2)); // Imprime: 5

// Diferencia: estas funciones NO tienen "hoisting"
// (no se pueden llamar antes de declararlas)

// ===== 5. FUNCIONES FLECHA (ARROW FUNCTIONS) =====

// === Sintaxis básica ===
// Forma moderna y más corta de escribir funciones
// Sintaxis: const nombre = (parámetros) => { código };
const multiplicarFlecha = (a, b) => {
    return a * b;
};

console.log(multiplicarFlecha(3, 4)); // Imprime: 12

// === Return implícito (sin llaves) ===
// Si la función solo tiene una línea que retorna, se pueden omitir {} y return
const multiplicarCorto = (a, b) => a * b; // Más corto

console.log(multiplicarCorto(5, 6)); // Imprime: 30

// === Un solo parámetro (sin paréntesis) ===
// Si hay un solo parámetro, se pueden omitir los paréntesis
const cuadrado = x => x * x; // x => x * x

console.log(cuadrado(5)); // Imprime: 25

// === Sin parámetros ===
// Si no hay parámetros, usa paréntesis vacíos
const obtenerFechaActual = () => new Date();

console.log(obtenerFechaActual()); // Imprime fecha actual

// === Con múltiples líneas ===
const calcularDescuento = (precio, descuento) => {
    let precioConDescuento = precio - (precio * descuento / 100);
    return precioConDescuento;
};

console.log(calcularDescuento(100, 20)); // Imprime: 80

// ===== 6. SCOPE (ALCANCE) DE VARIABLES =====

// === Variables globales ===
// Declaradas fuera de funciones, accesibles desde cualquier parte
let variableGlobal = "Soy global";

function mostrarGlobal() {
    console.log(variableGlobal); // Puede acceder a variable global
}

mostrarGlobal(); // Imprime: Soy global

// === Variables locales ===
// Declaradas dentro de funciones, solo existen dentro de esa función
function miFuncion() {
    let variableLocal = "Solo existo aquí";
    console.log(variableLocal); // Funciona dentro de la función
}

miFuncion(); // Imprime: Solo existo aquí
// console.log(variableLocal); // ❌ ERROR: no existe fuera de la función

// === Shadowing (sombreado) ===
// Variable local con mismo nombre que global "oculta" la global
let numero = 10; // Variable global

function cambiarNumero() {
    let numero = 20; // Variable local (diferente de la global)
    console.log("Dentro:", numero); // Imprime: 20
}

cambiarNumero();
console.log("Fuera:", numero); // Imprime: 10 (no cambió la global)

// ===== 7. FUNCIONES COMO ARGUMENTOS (CALLBACKS) =====

// Las funciones pueden pasarse como argumentos a otras funciones
function ejecutarOperacion(a, b, operacion) {
    // 'operacion' es una función que se pasa como parámetro
    return operacion(a, b);
}

// Definir funciones que se usarán como callbacks
function sumarNumeros(x, y) {
    return x + y;
}

function restarNumeros(x, y) {
    return x - y;
}

// Pasar funciones como argumentos (sin paréntesis)
console.log(ejecutarOperacion(10, 5, sumarNumeros)); // Imprime: 15
console.log(ejecutarOperacion(10, 5, restarNumeros)); // Imprime: 5

// Callback con función anónima
console.log(ejecutarOperacion(10, 5, function(a, b) {
    return a * b;
})); // Imprime: 50

// Callback con función flecha
console.log(ejecutarOperacion(10, 5, (a, b) => a / b)); // Imprime: 2

// Ejemplo práctico: procesar array
function procesarArray(array, funcionProcesar) {
    let resultado = [];
    for (let elemento of array) {
        resultado.push(funcionProcesar(elemento));
    }
    return resultado;
}

let numeros = [1, 2, 3, 4, 5];
let cuadrados = procesarArray(numeros, x => x * x);
console.log(cuadrados); // Imprime: [1, 4, 9, 16, 25]

// ===== 8. FUNCIONES RECURSIVAS =====

// Una función que se llama a sí misma
// Útil para problemas que se dividen en subproblemas similares
// IMPORTANTE: debe tener una condición de salida para no ser infinita

// Ejemplo: factorial (5! = 5 * 4 * 3 * 2 * 1 = 120)
function factorial(n) {
    // Condición de salida (base)
    if (n === 0 || n === 1) {
        return 1;
    }
    // Llamada recursiva
    return n * factorial(n - 1);
    // factorial(5) = 5 * factorial(4)
    // factorial(4) = 4 * factorial(3)
    // factorial(3) = 3 * factorial(2)
    // factorial(2) = 2 * factorial(1)
    // factorial(1) = 1 (condición de salida)
}

console.log(factorial(5)); // Imprime: 120

// Ejemplo: cuenta regresiva
function cuentaRegresiva(numero) {
    if (numero < 0) {
        // Condición de salida
        console.log("¡Despegue!");
        return;
    }
    console.log(numero);
    cuentaRegresiva(numero - 1); // Llamada recursiva
}

cuentaRegresiva(5); // Imprime: 5, 4, 3, 2, 1, 0, ¡Despegue!

// ===== 9. CLOSURES (CLAUSURAS) =====

// Una función que "recuerda" variables de su ámbito externo
// Incluso después de que la función externa haya terminado
function crearContador() {
    let contador = 0; // Variable privada
    
    // Devuelve una función que tiene acceso a 'contador'
    return function() {
        contador++; // Modifica variable del ámbito externo
        return contador;
    };
}

let contador1 = crearContador(); // Crea primer contador
console.log(contador1()); // Imprime: 1
console.log(contador1()); // Imprime: 2
console.log(contador1()); // Imprime: 3

let contador2 = crearContador(); // Crea segundo contador (independiente)
console.log(contador2()); // Imprime: 1 (tiene su propio contador)

// Ejemplo práctico: función que suma un valor fijo
function crearSumador(valorFijo) {
    // 'valorFijo' se "recuerda" en el closure
    return function(numero) {
        return numero + valorFijo;
    };
}

let sumar5 = crearSumador(5); // Crea función que suma 5
let sumar10 = crearSumador(10); // Crea función que suma 10

console.log(sumar5(3)); // Imprime: 8 (3 + 5)
console.log(sumar10(3)); // Imprime: 13 (3 + 10)

// ===== 10. MÉTODOS (FUNCIONES EN OBJETOS) =====

// Funciones dentro de objetos se llaman métodos
let calculadora = {
    // Propiedades
    marca: "Casio",
    
    // Métodos (funciones dentro del objeto)
    sumar: function(a, b) {
        return a + b;
    },
    
    restar: function(a, b) {
        return a - b;
    },
    
    // Sintaxis corta (ES6)
    multiplicar(a, b) {
        return a * b;
    },
    
    // Método con 'this' (referencia al objeto actual)
    mostrarMarca() {
        return "Calculadora " + this.marca;
        // 'this' se refiere a 'calculadora'
    }
};

// Llamar métodos
console.log(calculadora.sumar(5, 3)); // Imprime: 8
console.log(calculadora.restar(10, 4)); // Imprime: 6
console.log(calculadora.multiplicar(3, 4)); // Imprime: 12
console.log(calculadora.mostrarMarca()); // Imprime: Calculadora Casio

// ===== 11. THIS EN FUNCIONES =====

// 'this' se refiere al objeto que está ejecutando la función
let persona = {
    nombre: "Luis",
    edad: 25,
    
    // Función tradicional: 'this' se refiere a persona
    saludar: function() {
        return "Hola, soy " + this.nombre;
    },
    
    // Función flecha: 'this' NO se refiere a persona
    // (hereda 'this' del contexto externo)
    saludarFlecha: () => {
        return "Hola, soy " + this.nombre; // this es undefined o window
    },
    
    // Método que usa this correctamente
    cumplirAños() {
        this.edad++; // Incrementa la edad del objeto persona
        return "Ahora tengo " + this.edad + " años";
    }
};

console.log(persona.saludar()); // Imprime: Hola, soy Luis
console.log(persona.cumplirAños()); // Imprime: Ahora tengo 26 años
console.log(persona.edad); // Imprime: 26 (se modificó)

// ===== 12. REST PARAMETERS (PARÁMETROS REST) =====

// Permite recibir número indefinido de argumentos como array
// Sintaxis: function nombre(...parametro) { }
function sumarTodos(...numeros) {
    // 'numeros' es un array con todos los argumentos
    let total = 0;
    for (let numero of numeros) {
        total += numero;
    }
    return total;
}

console.log(sumarTodos(1, 2, 3)); // Imprime: 6
console.log(sumarTodos(1, 2, 3, 4, 5)); // Imprime: 15
console.log(sumarTodos(10, 20)); // Imprime: 30

// Combinar parámetros normales con rest
function presentar(nombre, edad, ...hobbies) {
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("Hobbies:", hobbies); // Array con resto de argumentos
}

presentar("Luis", 25, "Programar", "Leer", "Deportes");
// Imprime:
// Nombre: Luis
// Edad: 25
// Hobbies: ["Programar", "Leer", "Deportes"]

// ===== 13. IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION) =====

// Función que se ejecuta inmediatamente después de definirse
// Sintaxis: (function() { código })();
(function() {
    console.log("Esta función se ejecuta inmediatamente");
})();

// Con parámetros
(function(nombre) {
    console.log("Hola " + nombre);
})("Luis");

// Con función flecha
(() => {
    console.log("IIFE con función flecha");
})();

// Útil para crear ámbito privado
let resultado = (function() {
    let secreto = "No accesible desde fuera";
    return "Función ejecutada";
})();

console.log(resultado); // Imprime: Función ejecutada
// console.log(secreto); // ❌ ERROR: secreto no existe fuera de la función

// ===== 14. BUENAS PRÁCTICAS =====

// ✅ Nombres descriptivos para funciones (verbos)
function calcularPrecioTotal(precio, cantidad) { // ✅ Bien
    return precio * cantidad;
}

function x(a, b) { // ❌ Mal (no descriptivo)
    return a * b;
}

// ✅ Una función, una responsabilidad
function validarEmail(email) {
    // Solo valida email, no hace otras cosas
    return email.includes("@");
}

// ✅ Funciones cortas (idealmente menos de 20 líneas)
// ✅ Usar funciones flecha para funciones simples
const doblar = x => x * 2; // ✅ Limpio y conciso

// ✅ Documentar funciones complejas con comentarios
/**
 * Calcula el precio total con impuestos
 * @param {number} precio - Precio base del producto
 * @param {number} impuesto - Porcentaje de impuesto (0-100)
 * @returns {number} Precio total con impuestos
 */
function calcularPrecioConImpuesto(precio, impuesto) {
    return precio + (precio * impuesto / 100);
}

// ===== FIN DE LA GUÍA 4 =====
console.log("\n✅ Guía 4 completada: Funciones");

