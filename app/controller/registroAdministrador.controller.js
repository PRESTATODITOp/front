import fetch from "node-fetch";


const registroAdministrador = async(req,res)=>{
    res.render('registroadministrador.ejs');
}

const registrarAdmi = async (req, res) => {
  
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
    contrasena: req.body.contrasena,
    id_rol: req.body.id_rol,
    programa_formacion:"null",
    numero_ficha:"null"
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




  export const registroAdministradorController = {
    registroAdministrador, registrarAdmi
  };
  

 