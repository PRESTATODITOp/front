import { Router } from "express";
import axios from "axios";
import { registroAmbienteController } from "../controller/registroAmbiente.controller.js";
const router = Router();


router.get('/registroAmbiente', registroAmbienteController.registroAmbiente);
router.post('/registroAmbiente', registroAmbienteController.registroA);






export default router;