"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _middleware = _interopRequireDefault(require("../middleware/middleware.js"));
var _coordiToken = _interopRequireDefault(require("../middleware/coordiToken.js"));
var _coordinadorController = require("../controller/coordinador.controller.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var coordi = (0, _express.Router)();
coordi.get('/reportes', _middleware["default"], _coordiToken["default"], _coordinadorController.coordinadorController.reportes);
coordi.get('/seguimiento', _middleware["default"], _coordiToken["default"], _coordinadorController.coordinadorController.segumiento);
coordi.get('/aprobar', _middleware["default"], _coordiToken["default"], _coordinadorController.coordinadorController.aprobar);
coordi.post('/aceptar', _coordinadorController.coordinadorController.aceptar);
coordi.post('/rechazar', _coordinadorController.coordinadorController.rechazar);
var _default = coordi;
exports["default"] = _default;