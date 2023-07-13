import fetch from "node-fetch";


const registroAdministrador = async(req,res)=>{
    res.render('registroadministrador.ejs');
}

const registroAprendiz = async(req,res)=>{
    res.render('registroaprendiz.ejs');
};

const registroCoordinador = async(req,res)=>{
    res.render('registrocoordinador.ejs');

};

const registroInstructor = async (req, res) => {
    res.render('registroinstructor.ejs');
};

const registrarAdmi = async (req, res) => {
    try {
        const data = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            tipo_documento: req.body.tipo_documento,
            id: req.body.numero_documento,
            correo: req.body.correo_electronico,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            jornada: req.body.jornada,
            contrasena: req.body.contrasena,
            id_rol: req.body.id_rol,
            programa_formacion: "null",
            numero_ficha: "null"
        };

        const url = "http://localhost:3000/api/usuario";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };

        const response = await fetch(url, options);
        const responseData = await response.json();

        if (responseData && responseData > 0) {
            // Registro exitoso
            res.redirect("/rol");
        } else {
            // Error en el registro
            res.redirect("/?alerta=1");
        }
    } catch (error) {
        console.error(error);
        // Error en la petición
        res.redirect("/?alerta=2");
    }
};

const registrarAlumno = async (req, res) => {
  
    try {
      let data = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      tipo_documento: req.body.tipo_documento,
      id: req.body.numero_documento,
      correo: req.body.correo_electronico,
      telefono: req.body.telefono,
      direccion: req.body.direccion,
      jornada: req.body.jornada,
      programa_formacion: req.body.programa_formacion,
      numero_ficha: req.body.numero_ficha,
      genero: req.body.genero,
      contrasena: req.body.contrasena,
      id_rol: req.body.id_rol,
      };
  
      const url = "http://localhost:3000/api/usuario";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        
        body: JSON.stringify(data)
        
      };
      console.log(data);
      const response = await fetch(url, options)
      .then(response => response.json())
      .then(data =>{
        console.log(data);
      })
      .catch(error => console.log(error))
  
      // Inspeccionar la respuesta del servidor
     
  
      if (data && data > 0) {
      } else {
        // Manejar la respuesta del servidor cuando si es valida
        return res.redirect("/rol?alerta=1");
      }
    } catch (error) {
      console.error(error);
       // Manejar la respuesta del servidor cuando no es válida
      return res.redirect("/?alerta=2");
    }
  };

const registrarCoordi = async (req, res) => {
  
    try {
      
      let data = {
        id_rol: req.body.id_rol,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      tipo_documento: req.body.tipo_documento,
      id: req.body.numero_documento,
      correo: req.body.correo_electronico,
      telefono: req.body.telefono,
      direccion: req.body.direccion,
      jornada: req.body.jornada,
      genero: req.body.genero,
      contrasena: req.body.contrasena
      };
  
      const url = "http://localhost:3000/api/usuario";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        
        body: JSON.stringify(data)
        
      };
      console.log(data);
      const response = await fetch(url, options)
      .then(response => response.json())
      .then(data =>{
        console.log(data);
      })
      .catch(error => console.log(error))
  
      // Inspeccionar la respuesta del servidor
     
  
      if (data && data > 0) {
      } else {
        // Manejar la respuesta del servidor cuando si es valida
        return res.redirect("/rol?alerta=1");
      }
    } catch (error) {
      console.error(error);
       // Manejar la respuesta del servidor cuando no es válida
      return res.redirect("/?alerta=2");
    }
  };

  const registroi = async (req, res) => {
  
    try {
      let data = {
        id_rol: req.body.id_rol,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        tipo_documento: req.body.tipo_documento,
        id: req.body.numero_documento,
        correo: req.body.correo_electronico,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        jornada: req.body.jornada,
        programa_formacion: req.body.programa_formacion,
        numero_ficha: req.body.numero_ficha,
        genero: req.body.genero,
        contrasena: req.body.contrasena,
      };
  
      const url = "http://localhost:3000/api/usuario";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        
        body: JSON.stringify(data)
        
      };
      console.log(data);
      const response = await fetch(url, options)
      .then(response => response.json())
      .then(data =>{
        console.log(data);
      })
      .catch(error => console.log(error))
  
      // Inspeccionar la respuesta del servidor
     
  
      if (data && data > 0) {
      } else {
        // Manejar la respuesta del servidor cuando si es valida
        return res.redirect("/rol?alerta=1");
      }
    } catch (error) {
      console.error(error);
       // Manejar la respuesta del servidor cuando no es válida
      return res.redirect("/?alerta=2");
    }
  };


  export const registroUsuariosController = {
    registroAdministrador, registrarAdmi, registroAprendiz, registrarAlumno, registroCoordinador, registrarCoordi, registroInstructor, registroi
  };