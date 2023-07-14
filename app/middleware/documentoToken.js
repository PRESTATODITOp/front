import jwt from 'jsonwebtoken';
import Swal from 'sweetalert2';

const validarDocumento = (req, res, next) => {
    const numeroDocumentoUsuario = req.body.DOCUMENTO;
    const verificarToken = jwt.verify(req.cookies.PRESTATODITO, process.env.SECRET_KEY);
console.log(verificarToken);

    if (numeroDocumentoUsuario == verificarToken.ID_USUARIO) {
        console.log(numeroDocumentoUsuario);
        console.log(verificarToken.ID_USUARIO);
        next();
    } else {
        // Mostrar alerta de error
        const mensajeError = "El número de documento ingresado no es válido, por favor verificar que sea el correcto";
        res.send(`<script>alert("${mensajeError}"); window.location.replace('/prestamoPcInstructor?alerta=3');// Reemplazar con la ruta deseada</script>`);
       
      }



  };

  export default validarDocumento;