import { Router } from "express";
import admiToken from "../middleware/admiToken.js";
import middle from "../middleware/middleware.js";
import { registroAmbienteController } from "../controller/registroAmbiente.controller.js";
const router = Router();


router.get('/registroAmbiente',middle,admiToken,registroAmbienteController.registroAmbiente);
router.post('/registroAmbiente',middle,admiToken,registroAmbienteController.registroA);






export default router;