// Validacion para el envio por defecto de los formularios

function validarFormulario(e) {
    e.preventDefault();
   const formulario = document.querySelector("#formulario")
   formulario.submit();
   formulario.reset();
  };
