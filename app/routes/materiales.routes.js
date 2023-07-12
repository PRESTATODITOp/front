import { Router } from "express";
import middle from "../middleware/middleware.js";
import admiToken from "../middleware/admiToken.js";
import { materialesController } from "../controller/materiales.controller.js";
const materiales = Router();


materiales.get('/materialAdmin',middle,materialesController.materiales);










export default materiales;