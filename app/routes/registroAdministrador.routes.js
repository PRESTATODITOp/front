import { Router } from "express";
import axios from "axios";
import { registroAdministradorController } from "../controller/registroAdministrador.controller.js";
const router = Router();


router.get('/registroAdministrador', registroAdministradorController.registroAdministrador);
router.post('/registrarAdministrador', registroAdministradorController.registrarAdmi);






export default router;