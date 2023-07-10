import { Router } from "express";
import axios from "axios";
import { registroInstructorController } from "../controller/registroInstructor.controller.js";
const router = Router();


router.get('/registroInstructor', registroInstructorController.registroInstructor);

router.post('/registroi', registroInstructorController.registroi);






export default router;