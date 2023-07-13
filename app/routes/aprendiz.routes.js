import { Router } from "express";
import middle from "../middleware/middleware.js";
import aprenToken from "../middleware/aprenToken.js";
import validarDocumento from "../middleware/documentoToken.js";
import { aprendizController } from "../controller/aprendiz.controller.js";
const aprendiz = Router();

aprendiz.get('/menu-aprendiz',middle,aprenToken,aprendizController.menuAprendiz)

aprendiz.get('/controlcom',middle,aprenToken,aprendizController.controlCompu)

aprendiz.get('/prestamoPC2',middle,aprenToken,aprendizController.formularioPC);

aprendiz.get('/seguimientoA',middle,aprenToken,aprendizController.seguimientoA)

aprendiz.post('/insertareporte',validarDocumento,aprenToken,aprendizController.Insertareportepc);

aprendiz.post('/insertarComputadores',middle,validarDocumento,aprenToken,aprendizController.InsertarComputador);



export default aprendiz;
