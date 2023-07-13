import { response } from "express";
import fetch from "node-fetch";


const rolAdmin = (req, res) => {
res.render('rol.ejs', { errorr: req.query.errorr });  
};

const devolucionInsumos = (req, res) => {
  res.render('devolucionInsumos.ejs');
  
};
  
  // Cuando el documento está listo, se ejecuta la función de devolución de llamada.
  const validarRol = (req, res) => {
    const selectedValue = req.body.selectRol;
  
    if (!selectedValue) {
      res.redirect('/rol?errorr=true');
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

  const solicitud = async (req, res) => {
    try {
      const rutaRegistro = "http://localhost:3000/api/reserva";
      const rutaNoti = "http://localhost:3000/api/notificacion";
  
      const opciones = {
        method: "GET",
      };
  
      const [datosReserva, datosNoti] = await Promise.all([
        fetch(rutaRegistro, opciones).then(response => response.json()),
        fetch(rutaNoti, opciones).then(response => response.json())
      ]);
  
      res.render('registroSolicitud', {
        datosReserva: datosReserva[0],
       datosNoti:datosNoti[0]
      });
    } catch (error) {
      console.error(error);
      res.redirect("/");
    }
    
  };

  const usuariosRegistrados= async (req, res) => {
 
    try {
        
        let ruta = "http://localhost:3000/api/usuario";
        let option = {
            method: "GET",
        }
        let datos = {};
        const result = await fetch(ruta, option)
            .then(response => response.json())
            .then(data => {
                datos = data[0]
                console.log(data[0]);
            })
            .catch(err => console.error("error en peticion" + err))
  
        res.render('usuariosRegistrados', {
            "datosUsuarios": datos
        });
  
    } catch (error) {
        res.redirect("/");
    }
  
  
  };


  
  export const administradorController = {
    rolAdmin,
    validarRol,
    solicitud,
    usuariosRegistrados,
    devolucionInsumos
  };
  
  