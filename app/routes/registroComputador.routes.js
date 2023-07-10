import { Router } from "express";
import axios from "axios";
import { registroComputadorController } from "../controller/registroComputador.controller.js";
const router = Router();


router.get('/registroComputador', registroComputadorController.registroComputador);
router.post('/guardarEquipo', registroComputadorController.registroC);





export default router;