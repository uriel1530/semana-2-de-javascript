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
