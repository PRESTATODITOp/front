import { Router } from "express";
import middle from "../middleware/middleware.js";
import admiToken from "../middleware/admiToken.js";
import { registroMaterialController } from "../controller/registroMaterial.controller.js";
const router = Router();


router.get('/registroMaterial',middle,admiToken,registroMaterialController.registroMaterial);
router.post('/registroMaterial',middle,admiToken,registroMaterialController.registroM);





export default router;