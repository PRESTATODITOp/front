import { Router } from "express";
import admiToken from "../middleware/admiToken.js";
import middle from "../middleware/middleware.js";
import { registroAdministradorController } from "../controller/registroAdministrador.controller.js";
const router = Router();


router.get('/registroAdministrador',middle,admiToken,registroAdministradorController.registroAdministrador);
router.post('/registrarAdministrador',middle,admiToken, registroAdministradorController.registrarAdmi);






export default router;