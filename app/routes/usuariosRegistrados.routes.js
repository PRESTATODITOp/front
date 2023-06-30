import { Router } from "express";
import middle from "../middleware/middleware.js";
import { usuariosRegistradosController } from "../controller/usuariosRegistrados.controller.js";
const usuariosRegistrados = Router();


usuariosRegistrados.get('/usuariosRegistrados',middle,usuariosRegistradosController.usuariosRegistrados);











export default usuariosRegistrados;