import { Router } from "express";
import axios from "axios";
import { registroCoordinadorController } from "../controller/registroCoordinador.controller.js";
const router = Router();


router.get('/registroCoordinador', registroCoordinadorController.registroCoordinador);

router.post('/registrarCoordi', registroCoordinadorController.registrarCoordi);



export default router;