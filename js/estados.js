document
  .getElementById("agregarEstadoBtn")
  .addEventListener("click", function () {
    // Obtener el nombre del estado ingresado por el usuario
    var estadoIngresado = prompt("Ingrese el nombre del estado");

    // Verificar si el usuario ingresó un nombre de estado
    if (estadoIngresado) {
      // Convertir a minúsculas y quitar espacios
      estadoIngresado = estadoIngresado.toLowerCase().replace(/\s/g, "");
      console.log(estadoIngresado);

      // Buscar el círculo con el nombre del estado
      var estadoCircle = document.querySelector(
        '[data-state="' + estadoIngresado + '"]'
      );

      // Si se encuentra el círculo, cambiar su clase para mostrarlo
      if (estadoCircle) {
        estadoCircle.classList.remove("ocultando-estado");
        estadoCircle.classList.add("mostrando-estado");

        // Solicitar al usuario que ingrese el título
        var tituloIngresado = prompt("Ingrese el título");

        if (tituloIngresado) {
          var text = document.getElementById(estadoIngresado + "-text");
          var rect = document.getElementById(estadoIngresado + "-rect");

          console.log(text);
          console.log(rect);

          text.querySelector(".title").textContent = tituloIngresado;
        } else {
          console.log("Título no proporcionado");
        }
      } else {
        console.log("Estado no encontrado");
      }
    } else {
      console.log("Nombre de estado no proporcionado");
    }
  });
