import { Router } from "express";
import middle from "../middleware/middleware.js";
import coordiToken from "../middleware/coordiToken.js";
import { coordinadorController } from "../controller/coordinador.controller.js";
const coordi = Router();

  coordi.get('/reportes',middle,coordiToken,coordinadorController.reportes)
  coordi.get('/seguimiento',middle,coordiToken,coordinadorController.segumiento)
  coordi.get('/aprobar',middle,coordiToken,coordinadorController.aprobar)
  coordi.post('/aceptar',coordinadorController.aceptar);
  coordi.post('/rechazar',coordinadorController.rechazar);

export default coordi;