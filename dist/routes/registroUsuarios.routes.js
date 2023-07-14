"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _admiToken = _interopRequireDefault(require("../middleware/admiToken.js"));
var _middleware = _interopRequireDefault(require("../middleware/middleware.js"));
var _registroUsuariosController = require("../controller/registroUsuarios.controller.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var registroUsuarios = (0, _express.Router)();
registroUsuarios.post('/registrarAdministrador', _middleware["default"], _admiToken["default"], _registroUsuariosController.registroUsuariosController.registrarAdmi);
registroUsuarios.get('/registroAdministrador', _middleware["default"], _admiToken["default"], _registroUsuariosController.registroUsuariosController.registroAdministrador);
registroUsuarios.get('/registroAprendiz', _middleware["default"], _admiToken["default"], _registroUsuariosController.registroUsuariosController.registroAprendiz);
registroUsuarios.post('/registroAprendiz', _middleware["default"], _admiToken["default"], _registroUsuariosController.registroUsuariosController.registrarAlumno);
registroUsuarios.get('/registroCoordinador', _middleware["default"], _admiToken["default"], _registroUsuariosController.registroUsuariosController.registroCoordinador);
registroUsuarios.post('/registrarCoordi', _middleware["default"], _admiToken["default"], _registroUsuariosController.registroUsuariosController.registrarCoordi);
registroUsuarios.get('/registroInstructor', _registroUsuariosController.registroUsuariosController.registroInstructor);
registroUsuarios.post('/registroi', _registroUsuariosController.registroUsuariosController.registroi);
var _default = registroUsuarios;
exports["default"] = _default;