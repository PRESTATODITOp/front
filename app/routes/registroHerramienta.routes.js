import { Router } from "express";
import axios from "axios";
import { registroHerramientaController } from "../controller/registroHerramienta.controller.js";
const router = Router();


router.get('/registroHerramienta', registroHerramientaController.registroHerramienta);
router.post('/registroHerramienta', registroHerramientaController.registroH);






export default router;