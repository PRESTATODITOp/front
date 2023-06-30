import { response } from "express";
import fetch from "node-fetch";


const rolAdmin = (req, res) => {
res.render('rol.ejs', { error: req.query.error });  
};
  
  // Cuando el documento está listo, se ejecuta la función de devolución de llamada.
  const validarRol = (req, res) => {
    const selectedValue = req.body.selectRol;
  
    if (!selectedValue) {
      res.redirect('/rol?error=true');
    } else {
      let rol = "";
      switch (selectedValue) {
        case "1":
          rol = "/registroaprendiz";
          break;
        case "2":
          rol = "/registroinstructor";
          break;
        case "3":
          rol = "/registrocoordinador";
          break;
        case "4":
          rol = "/registroadministrador";
          break;
      }
      res.redirect(rol);
    }
  };
  
  export const administradorController = {
    rolAdmin,
    validarRol
  };
  
  