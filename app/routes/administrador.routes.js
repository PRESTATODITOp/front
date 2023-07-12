import { Router } from "express";
import middle from "../middleware/middleware.js";
import admiToken from "../middleware/admiToken.js";
import { administradorController } from "../controller/administrador.controller.js";
const administrador = Router();

administrador.get('/rol',middle,admiToken,administradorController.rolAdmin);
administrador.post('/registroRol',middle,admiToken,administradorController.validarRol);












export default administrador;