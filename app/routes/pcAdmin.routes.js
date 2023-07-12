import { Router } from "express";
import middle from "../middleware/middleware.js";
import admiToken from "../middleware/admiToken.js";
import { pcAdminController } from "../controller/pcAdmin.controller.js";
const pcAdmin = Router();

pcAdmin.get('/pcAdmin',middle,admiToken,pcAdminController.pcAdmin);

export default pcAdmin;
