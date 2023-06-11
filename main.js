function contarMultiplosDeTres() {
  let contador = 0;

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
      contador++;
    }
  }

  return contador;
}

// Ejemplo de uso:
const cantidadMultiplos = contarMultiplosDeTres();
console.log("Cantidad de múltiplos de 3: " + cantidadMultiplos);
