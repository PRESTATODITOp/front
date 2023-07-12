import { Router } from "express";
import middle from "../middleware/middleware.js";
import admiToken from "../middleware/admiToken.js";
import { registrosController } from "../controller/registros.controller.js";
const registros = Router();

registros.get('/registroInventario',middle,admiToken,registrosController.inventario)
registros.get('/registroSolicitud',middle,admiToken,registrosController.solicitud)

export default registros;