import { Router } from "express";
import middle from "../middleware/middleware.js";
import admiToken from "../middleware/admiToken.js";
import { usuariosRegistradosController } from "../controller/usuariosRegistrados.controller.js";
const usuariosRegistrados = Router();


usuariosRegistrados.get('/usuariosRegistrados',middle,admiToken,usuariosRegistradosController.usuariosRegistrados);











export default usuariosRegistrados;