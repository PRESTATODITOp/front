document.getElementById('reportes-aula').addEventListener('submit', function (event) {
    event.preventDefault();
    var form = event.target;

    if (form.checkValidity()) {
        Swal.fire({
            title: '¿Desea realizar la observacion?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then(function (result) {
            if (result.value) {
                Swal.fire({
                    title: 'Se ha realizado la observacion de manera exitosa',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                }).then(function () {
                    form.submit();
                });
            }
        });
    } 
});