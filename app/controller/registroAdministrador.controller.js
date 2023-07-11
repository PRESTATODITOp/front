import fetch from "node-fetch";


const registroAdministrador = async(req,res)=>{
    res.render('registroadministrador.ejs');
}

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




  export const registroAdministradorController = {
    registroAdministrador, registrarAdmi
  };
  

 