import { Router } from "express";
import axios from "axios";
import { registroAprendizController } from "../controller/registroAprendiz.controller.js";
const router = Router();


router.get('/registroAprendiz', registroAprendizController.registroAprendiz);

router.post('/registroAprendiz', registroAprendizController.registrarAlumno);




export default router;