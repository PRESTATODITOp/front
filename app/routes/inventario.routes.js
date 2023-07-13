import { Router } from "express";
import middle from "../middleware/middleware.js";
import admiToken from "../middleware/admiToken.js";
import { inventarioController } from "../controller/inventario.controller.js";
const inventario = Router();

inventario.get('/materialAdmin',middle,inventarioController.materiales);
inventario.get('/pcAdmin',middle,admiToken,inventarioController.pcAdmin);
inventario.get('/ambienteAdmin',middle,admiToken,inventarioController.ambienteAdmin);
inventario.get('/herraAdmin',middle,admiToken,inventarioController.herraAdmin);
inventario.get('/registroMaterial',middle,admiToken,inventarioController.registroMaterial);
inventario.post('/registroMaterial',middle,admiToken,inventarioController.registroM);
inventario.get('/registroComputador',middle,admiToken,inventarioController.registroComputador);
inventario.post('/guardarEquipo',middle,admiToken,inventarioController.registroC);
inventario.get('/registroAmbiente',middle,admiToken,inventarioController.registroAmbiente);
inventario.post('/registroAmbiente',middle,admiToken,inventarioController.registroA);
inventario.get('/registroHerramienta',middle,admiToken,inventarioController.registroHerramienta);
inventario.post('/registroHerramienta',middle,admiToken,inventarioController.registroH);

export default inventario;