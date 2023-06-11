function llenarArregloPares() {
  const arreglo = [];

  for (let i = 1; i <= 100; i++) {
    arreglo.push(2 * i);
  }

  return arreglo;
}

function sumarArreglo(arreglo) {
  let suma = 0;

  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }

  return suma;
}

// Ejemplo de uso:
const arregloPares = llenarArregloPares();
const suma = sumarArreglo(arregloPares);

console.log("Arreglo de los primeros 100 números pares:");
console.log(arregloPares);
console.log("Suma de los elementos del arreglo:", suma);
