import jwt from 'jsonwebtoken';

const instruToken = (req, res, next) => {
  try {
    const token = req.cookies.PRESTATODITO;

    //si no hay token entonces redirigase a acceso denegado
    if (!token) {
      return res.redirect('/denegado');
    }
    const verificarToken = jwt.verify(req.cookies.PRESTATODITO, process.env.SECRET_KEY);
    if (verificarToken.ID_ROL === 2) {
      // Si el token es válido y la verificación es exitosa continua
      next();

    } else{
      return res.redirect('/delete');
    }
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error al verificar el token' });
  }
};

export default instruToken;
