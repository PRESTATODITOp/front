function setAction(formato) {
    const form = document.getElementById('generarReporte');
    if (formato === 'pdf') {
      form.action = '/imprimirPDFC';
    } else if (formato === 'excel') {
      form.action = '/imprimirEXCELC';
    }
  }