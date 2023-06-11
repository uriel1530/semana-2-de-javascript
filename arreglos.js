function llenarArregloAlternado(n) {
  const arreglo = [];

  for (let i = 0; i < n; i++) {
    arreglo.push(i % 2);
  }

  return arreglo;
}

// Ejemplo de uso:
const tamañoArreglo = parseInt(prompt("Ingrese el tamaño del arreglo:"));
const arreglo = llenarArregloAlternado(tamañoArreglo);

console.log("Arreglo alternado de 1 y 0:");
console.log(arreglo);
