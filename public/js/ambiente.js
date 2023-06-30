// VALIDACION DE CARACTERES
// Obtiene los campos del formulario con los ID
var campos = document.querySelectorAll("#documento");

// Agrega un evento de escucha a los campos del formulario
campos.forEach(function(campo) {
campo.addEventListener("input", function() {
// Verifica si el campo de los que solo utilizan numeros
if (this.id === "documento") {
// Reemplaza cualquier caracter que no sea un número con una cadena vacía
this.value = this.value.replace(/[^0-9]/g, "");
}
});
});

function validarFormulario(e) {
  e.preventDefault();
 const formulario = document.querySelector("#formulario")
 formulario.submit();
 formulario.reset();
};



