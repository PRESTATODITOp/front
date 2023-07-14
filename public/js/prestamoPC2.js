
// Obtiene los campos del formulario con los ID
var campos = document.querySelectorAll("#documento,#cantidad");

// Agrega un evento de escucha a los campos del formulario
campos.forEach(function(campo) {
campo.addEventListener("input", function() {
// Verifica si el campo de los que solo utilizan numeros
if (this.id === "documento","cantidad") {
// Reemplaza cualquier caracter que no sea un número con una cadena vacía
this.value = this.value.replace(/[^0-9]/g, "");
}
});
});

document.getElementById('formulario').addEventListener('submit', function (event) {
  event.preventDefault();
  var form = event.target;

  if (form.checkValidity()) {
      Swal.fire({
          title: '¿Desea realizar la reserva?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar'
      }).then(function (result) {
          if (result.value) {
              Swal.fire({
                  title: 'Se ha reservado de manera exitosa',
                  icon: 'success',
                  confirmButtonText: 'Aceptar'
              }).then(function () {
                  form.submit();
              });
          }
      });
  } 
});



  


