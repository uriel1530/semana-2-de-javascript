function llenarArregloFibonacci() {
  const arreglo = [0, 1];

  for (let i = 2; i < 100; i++) {
    arreglo[i] = arreglo[i - 1] + arreglo[i - 2];
  }

  return arreglo;
}

// Ejemplo de uso:
const arregloFibonacci = llenarArregloFibonacci();

console.log("Arreglo de los primeros 100 números de la sucesión Fibonacci:");
console.log(arregloFibonacci);
