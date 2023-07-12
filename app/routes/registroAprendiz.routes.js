import { Router } from "express";
import admiToken from "../middleware/admiToken.js";
import middle from "../middleware/middleware.js";
import { registroAprendizController } from "../controller/registroAprendiz.controller.js";
const router = Router();


router.get('/registroAprendiz',middle,admiToken,registroAprendizController.registroAprendiz);

router.post('/registroAprendiz',middle,admiToken,registroAprendizController.registrarAlumno);




export default router;