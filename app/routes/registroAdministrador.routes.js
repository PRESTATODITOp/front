import { Router } from "express";
import admiToken from "../middleware/admiToken.js";
import middle from "../middleware/middleware.js";
import { registroAdministradorController } from "../controller/registroAdministrador.controller.js";
const router = Router();


router.post('/registrarAdministrador',middle,admiToken, registroAdministradorController.registrarAdmi);
router.get('/registroAdministrador',middle,admiToken, registroAdministradorController.registroAdministrador);






export default router;