"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _middleware = _interopRequireDefault(require("../middleware/middleware.js"));
var _admiToken = _interopRequireDefault(require("../middleware/admiToken.js"));
var _inventarioController = require("../controller/inventario.controller.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var inventario = (0, _express.Router)();
inventario.get('/materialAdmin', _middleware["default"], _inventarioController.inventarioController.materiales);
inventario.get('/pcAdmin', _middleware["default"], _admiToken["default"], _inventarioController.inventarioController.pcAdmin);
inventario.get('/ambienteAdmin', _middleware["default"], _admiToken["default"], _inventarioController.inventarioController.ambienteAdmin);
inventario.get('/herraAdmin', _middleware["default"], _admiToken["default"], _inventarioController.inventarioController.herraAdmin);
inventario.get('/registroMaterial', _middleware["default"], _admiToken["default"], _inventarioController.inventarioController.registroMaterial);
inventario.post('/registroMaterial', _middleware["default"], _admiToken["default"], _inventarioController.inventarioController.registroM);
inventario.get('/registroComputador', _middleware["default"], _admiToken["default"], _inventarioController.inventarioController.registroComputador);
inventario.post('/guardarEquipo', _middleware["default"], _admiToken["default"], _inventarioController.inventarioController.registroC);
inventario.get('/registroAmbiente', _middleware["default"], _admiToken["default"], _inventarioController.inventarioController.registroAmbiente);
inventario.post('/registroAmbiente', _middleware["default"], _admiToken["default"], _inventarioController.inventarioController.registroA);
inventario.get('/registroHerramienta', _middleware["default"], _admiToken["default"], _inventarioController.inventarioController.registroHerramienta);
inventario.post('/registroHerramienta', _middleware["default"], _admiToken["default"], _inventarioController.inventarioController.registroH);
var _default = inventario;
exports["default"] = _default;