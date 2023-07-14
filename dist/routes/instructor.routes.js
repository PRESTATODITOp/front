"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _middleware = _interopRequireDefault(require("../middleware/middleware.js"));
var _documentoToken = _interopRequireDefault(require("../middleware/documentoToken.js"));
var _instruToken = _interopRequireDefault(require("../middleware/instruToken.js"));
var _instructorController = require("../controller/instructor.controller.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var instructor = (0, _express.Router)();

// RUTAS GET

instructor.get('/menu-instructor', _middleware["default"], _instruToken["default"], _instructorController.instructorController.menuInstructor);
instructor.get('/prestamoPcInstructor', _middleware["default"], _instruToken["default"], _instructorController.instructorController.formularioComputador);
instructor.get('/respuestaPrestamo', _middleware["default"], _instruToken["default"], _instructorController.instructorController.respuestaPrestamo);
instructor.get('/ambientes', _middleware["default"], _instruToken["default"], _instructorController.instructorController.formularioAmbiente);
instructor.get('/herramientas', _middleware["default"], _instruToken["default"], _instructorController.instructorController.formularioHerramientas);
instructor.get('/material', _middleware["default"], _instruToken["default"], _instructorController.instructorController.formularioMateriales);
instructor.get('/controlAula', _middleware["default"], _instruToken["default"], _instructorController.instructorController.formularioControlAula);

// RUTAS POST

instructor.post('/insertarMaterial', _middleware["default"], _documentoToken["default"], _instruToken["default"], _instructorController.instructorController.InsertarMateriales);
instructor.post('/insertarHerramientas', _middleware["default"], _documentoToken["default"], _instruToken["default"], _instructorController.instructorController.InsertarHerramientas);
instructor.post('/insertarAmbientes', _middleware["default"], _documentoToken["default"], _instruToken["default"], _instructorController.instructorController.InsertarAmbientes);
instructor.post('/insertarComputador', _middleware["default"], _documentoToken["default"], _instruToken["default"], _instructorController.instructorController.InsertarComputador);
instructor.post('/reportesAula', _middleware["default"], _documentoToken["default"], _instruToken["default"], _instructorController.instructorController.reporteAulas);
var _default = instructor;
exports["default"] = _default;