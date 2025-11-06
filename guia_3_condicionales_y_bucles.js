// ============================================================================
// GUÍA 3: CONDICIONALES Y BUCLES EN JAVASCRIPT
// ============================================================================
// Esta guía te enseña estructuras de control de flujo para tomar decisiones y repetir código

// ===== 1. CONDICIONALES: IF, ELSE IF, ELSE =====

// === IF básico ===
// 'if' ejecuta código solo si la condición es verdadera (true)
// Sintaxis: if (condición) { código_a_ejecutar }
let edad = 18;

if (edad >= 18) {
    // Este código solo se ejecuta si edad >= 18 es true
    console.log("Eres mayor de edad");
}
// Imprime: Eres mayor de edad

// === IF con ELSE ===
// 'else' ejecuta código cuando la condición del if es falsa (false)
let temperatura = 15;

if (temperatura > 25) {
    console.log("Hace calor");
} else {
    // Se ejecuta porque temperatura > 25 es false
    console.log("No hace calor");
}
// Imprime: No hace calor

// === IF con ELSE IF ===
// 'else if' permite verificar múltiples condiciones en orden
let nota = 85;

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 80) {
    // Se ejecuta esta porque nota >= 80 es true
    console.log("Muy bien");
} else if (nota >= 70) {
    console.log("Bien");
} else if (nota >= 60) {
    console.log("Suficiente");
} else {
    console.log("Insuficiente");
}
// Imprime: Muy bien

// === Condiciones múltiples con operadores lógicos ===

// && (AND) - verdadero solo si AMBAS condiciones son true
let edad2 = 20;
let tieneLicencia = true;

if (edad2 >= 18 && tieneLicencia) {
    // Ambas condiciones son true
    console.log("Puede conducir");
}
// Imprime: Puede conducir

// || (OR) - verdadero si AL MENOS UNA condición es true
let esFinde = false;
let esVacacion = true;

if (esFinde || esVacacion) {
    // Al menos una es true (esVacacion)
    console.log("Puedes descansar");
}
// Imprime: Puedes descansar

// ! (NOT) - invierte el valor booleano
let estaLloviendo = false;

if (!estaLloviendo) {
    // !false se convierte en true
    console.log("Puedes salir sin paraguas");
}
// Imprime: Puedes salir sin paraguas

// === Condiciones complejas ===
let edad3 = 25;
let tieneInvitacion = true;
let esVIP = false;

if ((edad3 >= 18 && tieneInvitacion) || esVIP) {
    // Los paréntesis agrupan condiciones
    // (true && true) || false = true || false = true
    console.log("Acceso permitido al evento");
}
// Imprime: Acceso permitido al evento

// ===== 2. OPERADOR TERNARIO =====

// Forma corta de if-else en una sola línea
// Sintaxis: condición ? valor_si_true : valor_si_false
let edad4 = 20;
let mensaje = edad4 >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje); // Imprime: Mayor de edad

// Equivalente con if-else:
let mensaje2;
if (edad4 >= 18) {
    mensaje2 = "Mayor de edad";
} else {
    mensaje2 = "Menor de edad";
}

// Operadores ternarios anidados (no muy recomendado, menos legible)
let puntos = 85;
let categoria = puntos >= 90 ? "Oro" : puntos >= 70 ? "Plata" : "Bronce";
console.log(categoria); // Imprime: Plata

// ===== 3. SWITCH =====

// Switch evalúa una expresión y ejecuta código según el caso que coincida
// Útil cuando tienes muchas condiciones basadas en el mismo valor
let diaSemana = 3;

switch (diaSemana) {
    case 1: // Si diaSemana === 1
        console.log("Lunes");
        break; // 'break' sale del switch
    case 2: // Si diaSemana === 2
        console.log("Martes");
        break;
    case 3: // Si diaSemana === 3 (este caso se ejecuta)
        console.log("Miércoles");
        break; // Sin break, continuaría al siguiente caso
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default: // Se ejecuta si ningún caso coincide
        console.log("Día inválido");
}
// Imprime: Miércoles

// Switch con múltiples casos compartiendo código
let mes = "Enero";

switch (mes) {
    case "Diciembre":
    case "Enero":
    case "Febrero": // Estos 3 casos comparten el mismo código
        console.log("Es invierno");
        break;
    case "Marzo":
    case "Abril":
    case "Mayo":
        console.log("Es primavera");
        break;
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("Es verano");
        break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        console.log("Es otoño");
        break;
    default:
        console.log("Mes inválido");
}
// Imprime: Es invierno

// ===== 4. BUCLE FOR =====

// Bucle for repite código un número específico de veces
// Sintaxis: for (inicialización; condición; incremento) { código }

// Ejemplo básico: contar del 1 al 5
for (let i = 1; i <= 5; i++) {
    // i = 1: inicialización (se ejecuta una sola vez al inicio)
    // i <= 5: condición (se verifica antes de cada iteración)
    // i++: incremento (se ejecuta después de cada iteración)
    console.log("Número:", i);
}
// Imprime:
// Número: 1
// Número: 2
// Número: 3
// Número: 4
// Número: 5

// Bucle for con array
let frutas = ["Manzana", "Banana", "Naranja"];
for (let i = 0; i < frutas.length; i++) {
    // i empieza en 0 (primer índice del array)
    // continúa mientras i < frutas.length (3)
    console.log("Fruta " + (i + 1) + ":", frutas[i]);
}
// Imprime:
// Fruta 1: Manzana
// Fruta 2: Banana
// Fruta 3: Naranja

// Bucle for contando hacia atrás
for (let i = 5; i >= 1; i--) {
    // Empieza en 5 y decrementa hasta 1
    console.log("Cuenta regresiva:", i);
}
// Imprime: 5, 4, 3, 2, 1

// Bucle for con incrementos diferentes
for (let i = 0; i <= 10; i += 2) {
    // Incrementa de 2 en 2
    console.log("Número par:", i);
}
// Imprime: 0, 2, 4, 6, 8, 10

// ===== 5. BUCLE WHILE =====

// While repite código mientras la condición sea verdadera
// Sintaxis: while (condición) { código }
// Útil cuando NO sabes cuántas veces se repetirá

let contador = 1;
while (contador <= 5) {
    // Verifica condición antes de ejecutar
    console.log("Contador:", contador);
    contador++; // IMPORTANTE: incrementar para evitar bucle infinito
}
// Imprime: 1, 2, 3, 4, 5

// Ejemplo práctico: sumar hasta llegar a 100
let suma = 0;
let numero = 1;
while (suma < 100) {
    suma += numero; // suma = suma + numero
    numero++;
}
console.log("Suma total:", suma); // Imprime: 105 (primer valor que supera 100)
console.log("Números sumados:", numero - 1); // Imprime: 14

// ===== 6. BUCLE DO...WHILE =====

// Similar a while, pero SIEMPRE se ejecuta al menos una vez
// Verifica la condición DESPUÉS de ejecutar el código
// Sintaxis: do { código } while (condición);

let contador2 = 1;
do {
    // Se ejecuta primero, luego verifica condición
    console.log("Do-While:", contador2);
    contador2++;
} while (contador2 <= 5);
// Imprime: 1, 2, 3, 4, 5

// Diferencia con while: se ejecuta al menos una vez incluso si condición es false
let numero2 = 10;
do {
    console.log("Se ejecuta una vez:", numero2);
} while (numero2 < 5); // false, pero ya se ejecutó
// Imprime: Se ejecuta una vez: 10

// ===== 7. BUCLE FOR...OF =====

// For...of recorre elementos de arrays, strings, etc.
// Más simple que for tradicional cuando no necesitas el índice
// Sintaxis: for (let elemento of colección) { código }

let colores = ["Rojo", "Verde", "Azul"];
for (let color of colores) {
    // 'color' toma el valor de cada elemento
    console.log("Color:", color);
}
// Imprime:
// Color: Rojo
// Color: Verde
// Color: Azul

// For...of con strings (recorre cada carácter)
let palabra = "Hola";
for (let letra of palabra) {
    console.log(letra);
}
// Imprime: H, o, l, a

// ===== 8. BUCLE FOR...IN =====

// For...in recorre las CLAVES (propiedades) de objetos
// Sintaxis: for (let clave in objeto) { código }

let persona = {
    nombre: "Luis",
    edad: 25,
    ciudad: "Madrid"
};

for (let propiedad in persona) {
    // 'propiedad' es el nombre de cada clave
    console.log(propiedad + ":", persona[propiedad]);
}
// Imprime:
// nombre: Luis
// edad: 25
// ciudad: Madrid

// For...in con arrays (no recomendado, usa for...of)
let numeros = [10, 20, 30];
for (let indice in numeros) {
    // Devuelve índices como strings: "0", "1", "2"
    console.log("Índice:", indice, "Valor:", numeros[indice]);
}

// ===== 9. BREAK Y CONTINUE =====

// === BREAK: sale completamente del bucle ===
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Sale del bucle cuando i es 5
    }
    console.log("Break:", i);
}
// Imprime: 1, 2, 3, 4 (se detiene en 5)

// Ejemplo práctico: buscar un elemento
let nombres = ["Ana", "Carlos", "María", "Pedro"];
let buscar = "María";
let encontrado = false;

for (let nombre of nombres) {
    if (nombre === buscar) {
        console.log("Encontrado:", nombre);
        encontrado = true;
        break; // Ya lo encontró, no necesita seguir buscando
    }
}
// Imprime: Encontrado: María

// === CONTINUE: salta a la siguiente iteración ===
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Salta la iteración cuando i es 3
    }
    console.log("Continue:", i);
}
// Imprime: 1, 2, 4, 5 (se salta el 3)

// Ejemplo práctico: solo números pares
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        // Si es impar, salta esta iteración
        continue;
    }
    console.log("Par:", i);
}
// Imprime: 2, 4, 6, 8, 10

// ===== 10. BUCLES ANIDADOS =====

// Bucles dentro de otros bucles
// Útil para trabajar con estructuras de datos multidimensionales

// Ejemplo: tabla de multiplicar
for (let i = 1; i <= 3; i++) {
    // Bucle externo
    for (let j = 1; j <= 3; j++) {
        // Bucle interno (se ejecuta 3 veces por cada iteración del externo)
        console.log(i + " x " + j + " = " + (i * j));
    }
    console.log("---"); // Separador
}
// Imprime la tabla del 1, 2 y 3

// Array bidimensional (matriz)
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
    // Recorre filas
    for (let j = 0; j < matriz[i].length; j++) {
        // Recorre columnas
        console.log("Posición [" + i + "][" + j + "]:", matriz[i][j]);
    }
}

// ===== 11. MÉTODOS DE ARRAYS CON CALLBACKS =====

// === .forEach() ejecuta función para cada elemento ===
let numeros2 = [1, 2, 3, 4, 5];
numeros2.forEach(function(numero, indice) {
    // Primer parámetro: elemento actual
    // Segundo parámetro: índice (opcional)
    console.log("Índice " + indice + ":", numero);
});

// === .map() crea nuevo array transformando cada elemento ===
let numeros3 = [1, 2, 3, 4, 5];
let dobles = numeros3.map(function(numero) {
    // Devuelve el nuevo valor para cada elemento
    return numero * 2;
});
console.log(dobles); // Imprime: [2, 4, 6, 8, 10]

// === .filter() crea nuevo array con elementos que cumplan condición ===
let numeros4 = [1, 2, 3, 4, 5, 6, 7, 8];
let pares = numeros4.filter(function(numero) {
    // Devuelve true para incluir el elemento, false para excluirlo
    return numero % 2 === 0;
});
console.log(pares); // Imprime: [2, 4, 6, 8]

// === .find() devuelve el PRIMER elemento que cumple condición ===
let numeros5 = [5, 12, 8, 130, 44];
let mayorQue10 = numeros5.find(function(numero) {
    return numero > 10;
});
console.log(mayorQue10); // Imprime: 12 (el primero mayor que 10)

// === .some() verifica si AL MENOS UN elemento cumple condición ===
let edades = [12, 18, 25, 16];
let hayMayores = edades.some(function(edad) {
    return edad >= 18;
});
console.log(hayMayores); // Imprime: true

// === .every() verifica si TODOS los elementos cumplen condición ===
let todosMayores = edades.every(function(edad) {
    return edad >= 18;
});
console.log(todosMayores); // Imprime: false (hay menores de 18)

// ===== 12. BUENAS PRÁCTICAS =====

// ✅ Usar for...of para arrays cuando no necesitas índice
let animales = ["Perro", "Gato", "Pájaro"];
for (let animal of animales) {
    console.log(animal); // Más limpio que for tradicional
}

// ✅ Usar métodos de arrays (.map, .filter) cuando sea apropiado
let numeros6 = [1, 2, 3];
let cuadrados = numeros6.map(n => n * n); // Más funcional

// ✅ Evitar bucles infinitos
let i = 0;
while (i < 10) {
    console.log(i);
    i++; // ¡IMPORTANTE! Sin esto, bucle infinito
}

// ✅ Usar break para salir de bucles cuando encuentres lo que buscas
// ✅ Nombres de variables descriptivos en bucles
for (let estudiante of estudiantes) { // ✅ Bien
    // ...
}

for (let x of y) { // ❌ Mal (no descriptivo)
    // ...
}

// ===== FIN DE LA GUÍA 3 =====
console.log("\n✅ Guía 3 completada: Condicionales y Bucles");

