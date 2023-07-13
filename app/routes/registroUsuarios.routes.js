import { Router } from "express";
import admiToken from "../middleware/admiToken.js";
import middle from "../middleware/middleware.js";
import { registroUsuariosController } from "../controller/registroUsuarios.controller.js";
const registroUsuarios = Router();


registroUsuarios.post('/registrarAdministrador',middle,admiToken, registroUsuariosController.registrarAdmi);
registroUsuarios.get('/registroAdministrador',middle,admiToken, registroUsuariosController.registroAdministrador);
registroUsuarios.get('/registroAprendiz',middle,admiToken,registroUsuariosController.registroAprendiz);
registroUsuarios.post('/registroAprendiz',middle,admiToken,registroUsuariosController.registrarAlumno);
registroUsuarios.get('/registroCoordinador',middle,admiToken,registroUsuariosController.registroCoordinador);
registroUsuarios.post('/registrarCoordi',middle,admiToken,registroUsuariosController.registrarCoordi);
registroUsuarios.get('/registroInstructor', registroUsuariosController.registroInstructor);
registroUsuarios.post('/registroi', registroUsuariosController.registroi);



export default registroUsuarios;