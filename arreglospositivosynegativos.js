function llenarArreglo(n) {
  const arreglo = [];

  for (let i = 0; i < n; i++) {
    const numero = parseFloat(prompt("Ingrese un número:"));
    arreglo.push(numero);
  }

  return arreglo;
}

function contarPositivosNegativos(arreglo) {
  let positivos = 0;
  let negativos = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 0) {
      positivos++;
    } else if (arreglo[i] < 0) {
      negativos++;
    }
  }

  return {
    positivos: positivos,
    negativos: negativos,
  };
}

// Ejemplo de uso:
const tamañoArreglo = parseInt(prompt("Ingrese el tamaño del arreglo:"));
const arreglo = llenarArreglo(tamañoArreglo);
const resultado = contarPositivosNegativos(arreglo);

console.log("Arreglo ingresado:");
console.log(arreglo);
console.log("Cantidad de números positivos:", resultado.positivos);
console.log("Cantidad de números negativos:", resultado.negativos);
