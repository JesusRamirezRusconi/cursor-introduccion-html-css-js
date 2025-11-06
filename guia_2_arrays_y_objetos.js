// ============================================================================
// GUÍA 2: ARRAYS (ARREGLOS) Y OBJETOS EN JAVASCRIPT
// ============================================================================
// Esta guía te enseña estructuras de datos complejas para organizar información

// ===== 1. ARRAYS (ARREGLOS) =====

// === Declaración de arrays ===
// Los arrays son listas ordenadas de elementos
// Se declaran con corchetes [] y los elementos se separan por comas
let arrayVacio = []; // Array vacío, sin elementos
let numeros = [1, 2, 3, 4, 5]; // Array de números
let frutas = ["Manzana", "Banana", "Naranja"]; // Array de strings
let mixto = [1, "texto", true, null]; // Array con tipos mezclados (válido pero no recomendado)

console.log(frutas); // Imprime todo el array: ["Manzana", "Banana", "Naranja"]

// === Acceso a elementos (índices empiezan en 0) ===
// Usamos corchetes [] con el índice para acceder a un elemento
let primeraFruta = frutas[0]; // Índice 0 = primer elemento: "Manzana"
let segundaFruta = frutas[1]; // Índice 1 = segundo elemento: "Banana"
let terceraFruta = frutas[2]; // Índice 2 = tercer elemento: "Naranja"

console.log("Primera fruta:", primeraFruta); // Imprime: Manzana

// === Longitud del array ===
// .length devuelve la cantidad de elementos
let cantidadFrutas = frutas.length; // Devuelve 3
console.log("Cantidad de frutas:", cantidadFrutas); // Imprime: 3

// Acceder al último elemento usando length
let ultimaFruta = frutas[frutas.length - 1]; // length-1 porque índices empiezan en 0
console.log("Última fruta:", ultimaFruta); // Imprime: Naranja

// === Modificar elementos ===
frutas[1] = "Fresa"; // Cambia "Banana" por "Fresa"
console.log(frutas); // Imprime: ["Manzana", "Fresa", "Naranja"]

// ===== 2. MÉTODOS DE ARRAYS =====

// === AGREGAR elementos ===

// .push() agrega elemento(s) al FINAL del array
frutas.push("Uva"); // Agrega "Uva" al final
console.log(frutas); // Imprime: ["Manzana", "Fresa", "Naranja", "Uva"]

frutas.push("Sandía", "Melón"); // Puede agregar múltiples elementos
console.log(frutas); // Imprime: ["Manzana", "Fresa", "Naranja", "Uva", "Sandía", "Melón"]

// .unshift() agrega elemento(s) al INICIO del array
frutas.unshift("Piña"); // Agrega "Piña" al inicio
console.log(frutas); // Imprime: ["Piña", "Manzana", "Fresa", "Naranja", "Uva", "Sandía", "Melón"]

// === ELIMINAR elementos ===

// .pop() elimina y devuelve el ÚLTIMO elemento
let frutaEliminada = frutas.pop(); // Elimina "Melón"
console.log("Fruta eliminada:", frutaEliminada); // Imprime: Melón
console.log(frutas); // Imprime: ["Piña", "Manzana", "Fresa", "Naranja", "Uva", "Sandía"]

// .shift() elimina y devuelve el PRIMER elemento
let primeraEliminada = frutas.shift(); // Elimina "Piña"
console.log("Primera eliminada:", primeraEliminada); // Imprime: Piña
console.log(frutas); // Imprime: ["Manzana", "Fresa", "Naranja", "Uva", "Sandía"]

// .splice() elimina/agrega elementos en cualquier posición
// Sintaxis: array.splice(índice, cuántos_eliminar, elementos_a_agregar)
let animales = ["Perro", "Gato", "Ratón", "Pájaro"];
animales.splice(2, 1); // En índice 2, elimina 1 elemento ("Ratón")
console.log(animales); // Imprime: ["Perro", "Gato", "Pájaro"]

animales.splice(1, 0, "Conejo", "Hamster"); // En índice 1, elimina 0, agrega 2
console.log(animales); // Imprime: ["Perro", "Conejo", "Hamster", "Gato", "Pájaro"]

// === BUSCAR elementos ===

// .indexOf() devuelve el índice del elemento (o -1 si no existe)
let colores = ["Rojo", "Verde", "Azul", "Amarillo"];
let indiceVerde = colores.indexOf("Verde"); // Devuelve 1
let indiceNegro = colores.indexOf("Negro"); // Devuelve -1 (no existe)
console.log("Índice de Verde:", indiceVerde); // Imprime: 1
console.log("Índice de Negro:", indiceNegro); // Imprime: -1

// .includes() verifica si un elemento existe (devuelve true/false)
let existeAzul = colores.includes("Azul"); // Devuelve true
let existeNegro = colores.includes("Negro"); // Devuelve false
console.log("¿Existe Azul?:", existeAzul); // Imprime: true

// === UNIR y SEPARAR arrays ===

// .join() convierte array a string, uniendo elementos con un separador
let palabras = ["Hola", "mundo", "JavaScript"];
let frase = palabras.join(" "); // Une con espacios: "Hola mundo JavaScript"
let fraseConComas = palabras.join(", "); // Une con comas: "Hola, mundo, JavaScript"
console.log(frase); // Imprime: Hola mundo JavaScript

// .concat() une dos o más arrays
let numeros1 = [1, 2, 3];
let numeros2 = [4, 5, 6];
let numerosUnidos = numeros1.concat(numeros2); // Une ambos arrays
console.log(numerosUnidos); // Imprime: [1, 2, 3, 4, 5, 6]

// .slice() extrae una porción del array (no modifica el original)
// Sintaxis: array.slice(inicio, fin) - fin no incluido
let letras = ["A", "B", "C", "D", "E"];
let porcion = letras.slice(1, 4); // Desde índice 1 hasta 3 (4 no incluido)
console.log(porcion); // Imprime: ["B", "C", "D"]
console.log(letras); // Original sin cambios: ["A", "B", "C", "D", "E"]

// === ORDENAR arrays ===

// .sort() ordena el array alfabéticamente (modifica el original)
let frutas2 = ["Naranja", "Manzana", "Banana"];
frutas2.sort(); // Ordena alfabéticamente
console.log(frutas2); // Imprime: ["Banana", "Manzana", "Naranja"]

// Para ordenar números correctamente, necesitas una función de comparación
let numeros3 = [40, 100, 1, 5, 25];
numeros3.sort(); // ❌ Ordena como strings: [1, 100, 25, 40, 5]
console.log("Orden incorrecto:", numeros3);

numeros3.sort((a, b) => a - b); // ✅ Ordena números ascendente
console.log("Orden correcto:", numeros3); // Imprime: [1, 5, 25, 40, 100]

// .reverse() invierte el orden del array
let numeros4 = [1, 2, 3, 4, 5];
numeros4.reverse(); // Invierte el orden
console.log(numeros4); // Imprime: [5, 4, 3, 2, 1]

// ===== 3. RECORRER ARRAYS (BUCLES) =====

// === Bucle for tradicional ===
// for (inicialización; condición; incremento)
let paises = ["México", "España", "Argentina"];
for (let i = 0; i < paises.length; i++) {
    // i es el índice: 0, 1, 2...
    console.log("País " + i + ":", paises[i]);
}
// Imprime:
// País 0: México
// País 1: España
// País 2: Argentina

// === Bucle for...of (más moderno y simple) ===
// Recorre directamente los elementos, sin necesidad de índices
for (let pais of paises) {
    // pais es cada elemento del array
    console.log("País:", pais);
}

// === .forEach() método de arrays ===
// Ejecuta una función para cada elemento
paises.forEach(function(pais, indice) {
    // Primer parámetro: elemento actual
    // Segundo parámetro: índice (opcional)
    console.log(indice + ":", pais);
});

// Versión con función flecha (más corta):
paises.forEach((pais) => console.log(pais));

// ===== 4. OBJETOS =====

// === Declaración de objetos ===
// Los objetos almacenan pares clave-valor (propiedad: valor)
// Se declaran con llaves {} y las propiedades se separan por comas
let objetoVacio = {}; // Objeto vacío

let persona = {
    // propiedad: valor,
    nombre: "Luis",           // String
    edad: 25,                 // Number
    esEstudiante: true,       // Boolean
    ciudad: "Madrid"          // String
}; // Objeto con 4 propiedades

console.log(persona); // Imprime todo el objeto

// === Acceso a propiedades ===

// Notación de punto (más común)
let nombrePersona = persona.nombre; // Accede a la propiedad "nombre"
console.log(nombrePersona); // Imprime: Luis

// Notación de corchetes (útil cuando el nombre tiene espacios o es dinámico)
let edadPersona = persona["edad"]; // Accede a la propiedad "edad"
console.log(edadPersona); // Imprime: 25

// === Modificar propiedades ===
persona.edad = 26; // Cambia el valor de edad
persona.ciudad = "Barcelona"; // Cambia el valor de ciudad
console.log(persona.edad); // Imprime: 26

// === Agregar nuevas propiedades ===
persona.profesion = "Programador"; // Agrega nueva propiedad
persona.telefono = "555-1234"; // Agrega otra propiedad
console.log(persona); // Ahora tiene 6 propiedades

// === Eliminar propiedades ===
delete persona.telefono; // Elimina la propiedad telefono
console.log(persona); // Ya no tiene telefono

// ===== 5. OBJETOS CON MÉTODOS =====

// Los objetos pueden contener funciones (llamadas métodos)
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "Rojo",
    
    // Método (función dentro del objeto)
    arrancar: function() {
        console.log("El coche está arrancando...");
    },
    
    // Método con función flecha (sintaxis moderna)
    describir: function() {
        // 'this' se refiere al objeto actual
        return this.marca + " " + this.modelo + " del año " + this.año;
    }
};

// Llamar a los métodos
coche.arrancar(); // Ejecuta el método: Imprime "El coche está arrancando..."
let descripcion = coche.describir(); // Ejecuta y devuelve string
console.log(descripcion); // Imprime: Toyota Corolla del año 2022

// ===== 6. ARRAYS DE OBJETOS =====

// Muy común: arrays que contienen objetos
let estudiantes = [
    {
        nombre: "Ana",
        edad: 20,
        nota: 9.5
    },
    {
        nombre: "Carlos",
        edad: 22,
        nota: 8.0
    },
    {
        nombre: "María",
        edad: 21,
        nota: 9.0
    }
];

// Acceder a elementos
console.log(estudiantes[0].nombre); // Imprime: Ana
console.log(estudiantes[1].nota); // Imprime: 8.0

// Recorrer array de objetos
for (let estudiante of estudiantes) {
    console.log(estudiante.nombre + " tiene " + estudiante.edad + " años");
}

// Usar forEach con objetos
estudiantes.forEach((estudiante) => {
    console.log(`${estudiante.nombre}: ${estudiante.nota}`);
});

// ===== 7. OBJETOS ANIDADOS =====

// Los objetos pueden contener otros objetos
let empresa = {
    nombre: "Tech Solutions",
    fundacion: 2010,
    direccion: {
        // Objeto anidado
        calle: "Av. Principal",
        numero: 123,
        ciudad: "Madrid",
        codigoPostal: "28001"
    },
    empleados: [
        // Array de objetos anidado
        { nombre: "Juan", puesto: "CEO" },
        { nombre: "Laura", puesto: "CTO" }
    ]
};

// Acceder a propiedades anidadas
console.log(empresa.direccion.ciudad); // Imprime: Madrid
console.log(empresa.empleados[0].nombre); // Imprime: Juan

// ===== 8. MÉTODOS ÚTILES DE OBJETOS =====

let producto = {
    nombre: "Laptop",
    precio: 1200,
    marca: "Dell"
};

// Object.keys() devuelve array con las claves (nombres de propiedades)
let claves = Object.keys(producto);
console.log(claves); // Imprime: ["nombre", "precio", "marca"]

// Object.values() devuelve array con los valores
let valores = Object.values(producto);
console.log(valores); // Imprime: ["Laptop", 1200, "Dell"]

// Object.entries() devuelve array de arrays [clave, valor]
let entradas = Object.entries(producto);
console.log(entradas); // Imprime: [["nombre", "Laptop"], ["precio", 1200], ["marca", "Dell"]]

// Recorrer propiedades de un objeto
for (let clave in producto) {
    // 'in' recorre las claves del objeto
    console.log(clave + ":", producto[clave]);
}
// Imprime:
// nombre: Laptop
// precio: 1200
// marca: Dell

// ===== 9. DESESTRUCTURACIÓN =====

// === Desestructuración de arrays ===
// Extraer valores de arrays a variables individuales
let numeros5 = [10, 20, 30, 40];
let [primero, segundo, tercero] = numeros5; // Extrae los 3 primeros
console.log(primero); // Imprime: 10
console.log(segundo); // Imprime: 20

// === Desestructuración de objetos ===
// Extraer propiedades de objetos a variables individuales
let usuario = { nombre: "Pedro", edad: 30, ciudad: "Lima" };
let { nombre, edad } = usuario; // Extrae nombre y edad
console.log(nombre); // Imprime: Pedro
console.log(edad); // Imprime: 30

// ===== 10. SPREAD OPERATOR (Operador de propagación) =====

// === Con arrays ===
// Los tres puntos ... "expanden" el array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arraysCombinados = [...array1, ...array2]; // Une ambos arrays
console.log(arraysCombinados); // Imprime: [1, 2, 3, 4, 5, 6]

// Copiar arrays
let original = [1, 2, 3];
let copia = [...original]; // Crea una copia independiente
copia.push(4); // Modificar copia no afecta original
console.log(original); // Imprime: [1, 2, 3]
console.log(copia); // Imprime: [1, 2, 3, 4]

// === Con objetos ===
let persona1 = { nombre: "Ana", edad: 25 };
let persona2 = { ...persona1, ciudad: "Madrid" }; // Copia y agrega propiedad
console.log(persona2); // Imprime: { nombre: "Ana", edad: 25, ciudad: "Madrid" }

// ===== FIN DE LA GUÍA 2 =====
console.log("\n✅ Guía 2 completada: Arrays y Objetos");

