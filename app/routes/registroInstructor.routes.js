import { Router } from "express";
import axios from "axios";
import { registroInstructorController } from "../controller/registroInstructor.controller.js";
const router = Router();


router.get('/registroInstructor', registroInstructorController.registroInstructor);

router.post('/registroInstructor', (req, res)=>{
    const registro = {
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
        id_rol: req.body.id_rol




       
      };
    
      axios.post('http://localhost:3000/api/usuario', registro)
        .then(response => {
          console.log(response.data);
          // Aquí puedes realizar alguna acción adicional o mostrar un mensaje de éxito.
          res.redirect("/rol");      
        })
        .catch(error => {
          console.error(error);
          // Aquí puedes manejar el error de alguna manera o mostrar un mensaje de error.
          
        });

});




export default router;