"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _middleware = _interopRequireDefault(require("../middleware/middleware.js"));
var _coordiToken = _interopRequireDefault(require("../middleware/coordiToken.js"));
var _admiToken = _interopRequireDefault(require("../middleware/admiToken.js"));
var _comprobanteController = require("../controller/comprobante.controller.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var comprobante = (0, _express.Router)();
comprobante.post('/generarpdf', _middleware["default"], _admiToken["default"], _comprobanteController.comprobanteController.generarPdf);
comprobante.post('/generarexcel', _middleware["default"], _admiToken["default"], _comprobanteController.comprobanteController.generarexcel);

//Coordinador ambiente
comprobante.post('/imprimirPDFC', _middleware["default"], _coordiToken["default"], _comprobanteController.comprobanteController.imprimirPDFC);
comprobante.post('/imprimirEXCELC', _middleware["default"], _coordiToken["default"], _comprobanteController.comprobanteController.imprimirEXCELC);
var _default = comprobante;
exports["default"] = _default;