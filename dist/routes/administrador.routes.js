"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _middleware = _interopRequireDefault(require("../middleware/middleware.js"));
var _admiToken = _interopRequireDefault(require("../middleware/admiToken.js"));
var _administradorController = require("../controller/administrador.controller.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var administrador = (0, _express.Router)();
administrador.get('/rol', _middleware["default"], _admiToken["default"], _administradorController.administradorController.rolAdmin);
administrador.post('/registroRol', _middleware["default"], _admiToken["default"], _administradorController.administradorController.validarRol);
administrador.get('/registroSolicitud', _middleware["default"], _admiToken["default"], _administradorController.administradorController.solicitud);
administrador.get('/usuariosRegistrados', _middleware["default"], _admiToken["default"], _administradorController.administradorController.usuariosRegistrados);
administrador.get('/devolucionInsumos', _middleware["default"], _admiToken["default"], _administradorController.administradorController.devolucionInsumos);
administrador.get('/insumosNoDevueltos', _middleware["default"], _admiToken["default"], _administradorController.administradorController.insumosNoDevueltos);
// administrador.put('/prestamos', middle, admiToken, administradorController.actualizarEstado); //esto es una actualizacion
administrador.post('/actualizarEstado', _administradorController.administradorController.actualizarEstado);
var _default = administrador;
exports["default"] = _default;