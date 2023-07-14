import { Router } from "express";
import middle from "../middleware/middleware.js";
import validarDocumento from "../middleware/documentoToken.js";
import instruToken from "../middleware/instruToken.js";
import { instructorController } from "../controller/instructor.controller.js";
const instructor = Router();

// RUTAS GET

instructor.get('/menu-instructor',middle,instruToken,instructorController.menuInstructor);

instructor.get('/prestamoPcInstructor',middle,instruToken,instructorController.formularioComputador)

instructor.get('/respuestaPrestamo',middle,instruToken,instructorController.respuestaPrestamo)

instructor.get('/ambientes',middle,instruToken,instructorController.formularioAmbiente)

instructor.get('/herramientas',middle,instruToken,instructorController.formularioHerramientas);

instructor.get('/material',middle,instruToken,instructorController.formularioMateriales);
  
instructor.get('/controlAula',middle,instruToken,instructorController.formularioControlAula)

// RUTAS POST

instructor.post('/insertarMaterial',middle,validarDocumento,instruToken,instructorController.InsertarMateriales);

instructor.post('/insertarHerramientas',middle,validarDocumento,instruToken,instructorController.InsertarHerramientas);

instructor.post('/insertarAmbientes',middle,validarDocumento,instruToken,instructorController.InsertarAmbientes);

instructor.post('/insertarComputador',middle,validarDocumento,instruToken,instructorController.InsertarComputador);

instructor.post('/reportesAula',middle,validarDocumento,instruToken,instructorController.reporteAulas);





  


  export default instructor;
  
