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
