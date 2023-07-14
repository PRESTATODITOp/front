"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _middleware = _interopRequireDefault(require("../middleware/middleware.js"));
var _aprenToken = _interopRequireDefault(require("../middleware/aprenToken.js"));
var _documentoToken = _interopRequireDefault(require("../middleware/documentoToken.js"));
var _aprendizController = require("../controller/aprendiz.controller.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var aprendiz = (0, _express.Router)();
aprendiz.get('/menu-aprendiz', _middleware["default"], _aprenToken["default"], _aprendizController.aprendizController.menuAprendiz);
aprendiz.get('/controlcom', _middleware["default"], _aprenToken["default"], _aprendizController.aprendizController.controlCompu);
aprendiz.get('/prestamoPC2', _middleware["default"], _aprenToken["default"], _aprendizController.aprendizController.formularioPC);
aprendiz.get('/seguimientoA', _middleware["default"], _aprenToken["default"], _aprendizController.aprendizController.seguimientoA);
aprendiz.post('/insertareportepc', _middleware["default"], _documentoToken["default"], _aprenToken["default"], _aprendizController.aprendizController.Insertareportepc);
aprendiz.post('/insertarComputadores', _middleware["default"], _documentoToken["default"], _aprenToken["default"], _aprendizController.aprendizController.InsertarComputador);
var _default = aprendiz;
exports["default"] = _default;