import { Router } from "express";
import middle from "../middleware/middleware.js";
import aprenToken from "../middleware/aprenToken.js";
import { aprendizController } from "../controller/aprendiz.controller.js";
const aprendiz = Router();

aprendiz.get('/menu-aprendiz',middle,aprenToken,aprendizController.menuAprendiz)

aprendiz.get('/controlcom',middle,aprenToken,aprendizController.controlCompu)

aprendiz.get('/prestamoPC2',middle,aprenToken,aprendizController.formularioPC);

aprendiz.get('/seguimientoA',middle,aprenToken,aprendizController.seguimientoA)

aprendiz.post('/insertareporte',aprenToken,aprendizController.Insertareportepc);

aprendiz.post('/insertarComputador',middle,aprenToken,aprendizController.InsertarComputadores);


export default aprendiz;
