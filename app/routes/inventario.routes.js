import { Router } from "express";
import middle from "../middleware/middleware.js";
import admiToken from "../middleware/admiToken.js";
import { inventarioController } from "../controller/inventario.controller.js";
const inventario = Router();

inventario.get('/materialAdmin',middle,inventarioController.materiales);
inventario.get('/pcAdmin',middle,admiToken,inventarioController.pcAdmin);
inventario.get('/ambienteAdmin',middle,admiToken,inventarioController.ambienteAdmin);
inventario.get('/herraAdmin',middle,admiToken,inventarioController.herraAdmin);


export default inventario;