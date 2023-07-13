import jwt from 'jsonwebtoken';


const validarDocumento = (req, res, next) => {
    const numeroDocumentoUsuario = req.body.DOCUMENTO;
    const verificarToken = jwt.verify(req.cookies.PRESTATODITO, process.env.SECRET_KEY);
console.log(verificarToken);

    if (numeroDocumentoUsuario == verificarToken.ID_USUARIO) {
        console.log(numeroDocumentoUsuario);
        console.log(verificarToken.ID_USUARIO);
        next();
    } else{
        return res.status(400).json({ error: 'El número de documento ingresado no es válido' });

    }
    
  
  };

  export default validarDocumento;