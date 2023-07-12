import { Router } from "express";
import middle from "../middleware/middleware.js";
import admiToken from "../middleware/admiToken.js";
import { ambienteAdminController } from "../controller/ambienteAdmin.controller.js";

const ambienteAdmin = Router();


ambienteAdmin.get('/ambienteAdmin',middle,admiToken,ambienteAdminController.ambienteAdmin);





export default ambienteAdmin;