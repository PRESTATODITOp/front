import jwt from 'jsonwebtoken';

const coordiToken = (req, res, next) => {
  try {
    const token = req.cookies.PRESTATODITO;

    //si no hay token entonces redirigase a acceso denegado
    if (!token) {
      return res.redirect('/denegado');
    }
    const verificarToken = jwt.verify(req.cookies.PRESTATODITO, process.env.SECRET_KEY);
    if (verificarToken.ID_ROL === 3) {
      // Si el token es válido y la verificación es exitosa continua
      next();

    } else{
      return res.redirect('/denegado');
    }
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error al verificar el token' });
  }
};

export default coordiToken;
