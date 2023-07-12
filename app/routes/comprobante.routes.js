import { Router } from "express";
import middle from "../middleware/middleware.js";
import coordiToken from "../middleware/coordiToken.js";
import admiToken from "../middleware/admiToken.js";
import { comprobanteController } from "../controller/comprobante.controller.js";

const comprobante = Router();

comprobante.post('/generarpdf', middle,admiToken,comprobanteController.generarPdf);
comprobante.post('/generarexcel', middle,admiToken,comprobanteController.generarexcel);


//Coordinador ambiente
comprobante.post('/imprimirPDFC', middle,coordiToken,comprobanteController.imprimirPDFC);
comprobante.post('/imprimirEXCELC', middle,coordiToken,comprobanteController.imprimirEXCELC);



export default comprobante;
