function llenarArregloPares(n) {
  const arreglo = [];

  for (let i = 0; i < n; i++) {
    arreglo.push(2 * (i + 1));
  }

  return arreglo;
}

// Ejemplo de uso:
let tamañoArreglo = parseInt(prompt("Ingrese el tamaño del arreglo:"));

// Validar que el tamaño del arreglo sea impar
while (tamañoArreglo % 2 === 0) {
  console.log("El tamaño del arreglo debe ser impar. Intenta nuevamente.");
  tamañoArreglo = parseInt(prompt("Ingrese el tamaño del arreglo:"));
}

const arreglo = llenarArregloPares(tamañoArreglo);

console.log("Arreglo de números pares:");
console.log(arreglo);
