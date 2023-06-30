import { Router } from "express";
import middle from "../middleware/middleware.js";
import { aprendizController } from "../controller/aprendiz.controller.js";
const aprendiz = Router();

aprendiz.get('/menu-aprendiz',middle,aprendizController.menuAprendiz)

aprendiz.get('/controlcom',middle,aprendizController.controlCompu)

aprendiz.get('/prestamoPC2',middle,aprendizController.formularioPC);

aprendiz.get('/seguimientoA',middle,aprendizController.seguimientoA)

aprendiz.post('/insertareporte',aprendizController.Insertareportepc);

aprendiz.post('/insertarComputador',middle,aprendizController.InsertarComputadores);


export default aprendiz;
