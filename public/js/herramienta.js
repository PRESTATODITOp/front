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


var campos = document.querySelectorAll("#nombre_herra");
campos.forEach(function(campo) {
campo.addEventListener("input", function() {
if (this.id === "nombre_herra") {
this.value = this.value.replace(/[^a-zA-Z]/g, "");
}
});
});


function validarFormulario(e) {
  e.preventDefault();
 const formulario = document.querySelector("#formulario")
 formulario.submit();
 formulario.reset();
};
