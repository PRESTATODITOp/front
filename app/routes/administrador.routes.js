import { Router } from "express";
import middle from "../middleware/middleware.js";
import admiToken from "../middleware/admiToken.js";
import { administradorController } from "../controller/administrador.controller.js";
const administrador = Router();

administrador.get('/rol',middle,admiToken,administradorController.rolAdmin);
administrador.post('/registroRol',middle,admiToken,administradorController.validarRol);
administrador.get('/registroSolicitud',middle,admiToken,administradorController.solicitud)
administrador.get('/usuariosRegistrados',middle,admiToken,administradorController.usuariosRegistrados);
administrador.get('/devolucionInsumos',middle,admiToken,administradorController.devolucionInsumos);
administrador.get('/insumosNoDevueltos',middle,admiToken,administradorController.insumosNoDevueltos);
// administrador.put('/prestamos', middle, admiToken, administradorController.actualizarEstado); //esto es una actualizacion
administrador.post('/actualizarEstado',administradorController.actualizarEstado);











export default administrador;