document.getElementById('aceptarbtn').addEventListener('submit', function (event) {
    event.preventDefault();
    var form = event.target;

    if (form.checkValidity()) {
        Swal.fire({
            title: '¿Estas Seguro De Aceptar Este Insumo?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#39a900',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then(function (result) {
            if (result.value) {
                Swal.fire({
                    title: 'El Prestamo de ha sido aceptado correctamente',
                    icon: 'success',
                    confirmButtonColor: '#28A745',
                    confirmButtonText: 'Aceptar'
                }).then(function () {
                    form.submit();
                });
            }
        });
    }
});

document.getElementById('rechazarbtn').addEventListener('submit', function (event) {
    event.preventDefault();
    var form = event.target;

    if (form.checkValidity()) {
        Swal.fire({
            title: '¿Estas Seguro De Rechazar Este Insumo??',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#39a900',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then(function (result) {
            if (result.value) {
                Swal.fire({
                    title: 'El Prestamo de ha sido rechazado correctamente',
                    icon: 'success',
                    confirmButtonColor: '#28A745',
                    confirmButtonText: 'Aceptar'
                }).then(function () {
                    form.submit();
                });
            }
        });
    }
  
   
});
// // Selecciona todos los elementos de la clase btnRechazar