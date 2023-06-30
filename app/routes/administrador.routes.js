import { Router } from "express";
import middle from "../middleware/middleware.js";
import { administradorController } from "../controller/administrador.controller.js";
const administrador = Router();

administrador.get('/rol',middle,administradorController.rolAdmin);
administrador.post('/registroRol',middle,administradorController.validarRol);












export default administrador;