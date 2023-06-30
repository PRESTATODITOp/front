import { Router } from "express";
import axios from "axios";
import { registroMaterialController } from "../controller/registroMaterial.controller.js";
const router = Router();


router.get('/registroMaterial', registroMaterialController.registroMaterial);
router.post('/registroMaterial', registroMaterialController.registroM);





export default router;