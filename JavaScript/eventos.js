function calculo() {
  let estudiante = 40;
  let trainer = 100;
  let junior = 170;
  let total = 0;

  let cantidad = parseFloat(document.getElementById("primero").value);
  let categoria = document.getElementById("segundo").value;

  switch (categoria) {
    case "opcion1":
      total = cantidad * estudiante;
      break;
    case "opcion2":
      total = cantidad * trainer;
      break;
    case "opcion3":
      total = cantidad * junior;
      break;
  }

  document.getElementById("resultadoInput").value = "Total a pagar $" + total.toFixed(2);
}

document.getElementById("miBoton").addEventListener("click", calculo);
