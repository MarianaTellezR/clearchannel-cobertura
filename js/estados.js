/*$(document).ready(function () {

  $("#agregarEstado").click(function () {
    // Pedir al usuario que ingrese el nombre del nuevo estado
    var nuevoEstado = prompt("Ingrese el nombre del nuevo estado:");

    // Verificar si el usuario ingresó un nombre de estado
    if (nuevoEstado) {
      // Llamamos a la función agregarEstado con el nombre del nuevo estado
      alert(nuevoEstado);
      agregarEstado(nuevoEstado, Math.random() * 800, Math.random() * 600);
    }
  });
});
*/

document.getElementById("agregarEstadoBtn").addEventListener("click", function () {
    // Obtener el nombre del estado ingresado por el usuario
    var estadoIngresado = document.getElementById("estadoInput").value;

    // Buscar el círculo con el nombre del estado
    var estadoCircle = document.querySelector(
      '[data-state="' + estadoIngresado + '"]'
    );

    // Si se encuentra el círculo, cambiar su clase para mostrarlo
    if (estadoCircle) {
      estadoCircle.classList.remove("hide");
      estadoCircle.classList.add("mostrando");
    } else {
      console.log("Estado no encontrado");
    }
  });
