// Generar 100 números aleatorios y mostrar solo los números pares

// Función para generar un número aleatorio entre un rango específico
function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generar 100 números aleatorios y mostrar solo los números pares
for (let i = 0; i < 100; i++) {
  const numero = generarNumeroAleatorio(1, 100);

  if (numero % 2 === 0) {
    console.log(numero);
  }
}
// Sumar los primeros 150 números

let suma = 0;

for (let i = 1; i <= 150; i++) {
  suma += i;
}

console.log("La suma de los primeros 150 números es: " + suma);

// Calcular el costo total de 10 productos

const readline = require("readline");

// Configurar la interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let total = 0;
let contador = 1;

// Función para leer el precio de un producto
function leerPrecio() {
  rl.question(`Ingrese el precio del producto ${contador}: `, (precio) => {
    const precioNum = parseFloat(precio);

    if (!isNaN(precioNum) && precioNum > 0) {
      total += precioNum;
      contador++;

      if (contador > 10) {
        rl.close();
        console.log(`El costo total de los 10 productos es: ${total}`);
      } else {
        leerPrecio();
      }
    } else {
      console.log("Ingrese un precio válido mayor que cero.");
      leerPrecio();
    }
  });
}

// Iniciar la lectura del primer precio
leerPrecio();

//Leer 12 notas de estudiantes y determinar cuántas aprobó y cuantas reprobó, dado un rango 0 a 10, reprueba cuando la nota está entre 0 y 5
function contarAprobadosReprobados(notas) {
  let aprobados = 0;
  let reprobados = 0;

  for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 6) {
      aprobados++;
    } else {
      reprobados++;
    }
  }

  return { aprobados, reprobados };
}

// Ejemplo de uso:
const notasEstudiantes = [7, 4, 8, 5, 6, 3, 9, 7, 5, 6, 7, 2];
const resultado = contarAprobadosReprobados(notasEstudiantes);

console.log("Aprobados: " + resultado.aprobados);
console.log("Reprobados: " + resultado.reprobados);

//Leer los primeros 50 números y contar cuantos múltiplos de 3 hay, imprimir la cantidad.

function contarMultiplosDeTres(limite) {
  let contador = 0;

  for (let i = 1; i <= limite; i++) {
    if (i % 3 === 0) {
      contador++;
    }
  }

  return contador;
}

// Ejemplo de uso:
const limiteSuperior = 100;
const cantidadMultiplos = contarMultiplosDeTres(limiteSuperior);
console.log(
  "Cantidad de múltiplos de 3 hasta " +
    limiteSuperior +
    ": " +
    cantidadMultiplos
);

//Leer n cantidad de notas de un estudiante e imprimir por pantalla.
function leerNotasEstudiante() {
  const notas = [];
  let cantidadNotas = prompt("Ingrese la cantidad de notas:");

  cantidadNotas = parseInt(cantidadNotas);

  for (let i = 0; i < cantidadNotas; i++) {
    let nota = prompt("Ingrese la nota " + (i + 1) + ":");
    nota = parseFloat(nota);

    if (!isNaN(nota)) {
      notas.push(nota);
    } else {
      console.log("Ingrese una nota válida. Intenta nuevamente.");
      i--; // Restar 1 al índice para repetir la iteración actual.
    }
  }

  return notas;
}

// Ejemplo de uso:
const notasEstudiante = leerNotasEstudiante();

console.log("Notas del estudiante:");
for (let i = 0; i < notasEstudiante.length; i++) {
  console.log("Nota " + (i + 1) + ": " + notasEstudiante[i]);
}

//Leer n cantidad números y determinar cantidad de impares, imprimir cantidad de impares.
function contarImpares() {
  const numeros = [];
  let cantidadNumeros = prompt("Ingrese la cantidad de números:");

  cantidadNumeros = parseInt(cantidadNumeros);

  for (let i = 0; i < cantidadNumeros; i++) {
    let numero = prompt("Ingrese el número " + (i + 1) + ":");
    numero = parseInt(numero);

    if (!isNaN(numero)) {
      numeros.push(numero);
    } else {
      console.log("Ingrese un número válido. Intenta nuevamente.");
      i--; // Restar 1 al índice para repetir la iteración actual.
    }
  }

  let impares = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      impares++;
    }
  }

  return impares;
}

// Ejemplo de uso:
const cantidadImpares = contarImpares();
console.log("Cantidad de números impares: " + cantidadImpares);

//Leer n cantidad de sueldos de empleados y determinar el sueldo más bajo, imprimir los sueldos y el sueldo más bajo
function obtenerSueldoMasBajo() {
  const sueldos = [];
  let cantidadSueldos = prompt("Ingrese la cantidad de sueldos:");

  cantidadSueldos = parseInt(cantidadSueldos);

  for (let i = 0; i < cantidadSueldos; i++) {
    let sueldo = prompt("Ingrese el sueldo del empleado " + (i + 1) + ":");
    sueldo = parseFloat(sueldo);

    if (!isNaN(sueldo)) {
      sueldos.push(sueldo);
    } else {
      console.log("Ingrese un sueldo válido. Intenta nuevamente.");
      i--; // Restar 1 al índice para repetir la iteración actual.
    }
  }

  let sueldoMasBajo = sueldos[0];

  for (let i = 1; i < sueldos.length; i++) {
    if (sueldos[i] < sueldoMasBajo) {
      sueldoMasBajo = sueldos[i];
    }
  }

  console.log("Sueldos de los empleados:");
  for (let i = 0; i < sueldos.length; i++) {
    console.log("Empleado " + (i + 1) + ": $" + sueldos[i]);
  }

  return sueldoMasBajo;
}

// Ejemplo de uso:
const sueldoMasBajo = obtenerSueldoMasBajo();
console.log("Sueldo más bajo: $" + sueldoMasBajo);

//Realizar un programa que pida la base, el exponente y se ejecute el cálculo sin uso de bibliotecas
function calcularPotencia() {
  let base = parseFloat(prompt("Ingrese la base:"));
  let exponente = parseInt(prompt("Ingrese el exponente:"));

  let resultado = 1;

  if (exponente >= 0) {
    for (let i = 0; i < exponente; i++) {
      resultado *= base;
    }
  } else {
    exponente *= -1; // Convierte el exponente negativo a positivo

    for (let i = 0; i < exponente; i++) {
      resultado /= base;
    }
  }

  return resultado;
}

// Ejemplo de uso:
const potencia = calcularPotencia();
console.log("El resultado de la potencia es: " + potencia);
