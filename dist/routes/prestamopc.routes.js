"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _middleware = _interopRequireDefault(require("../middleware/middleware.js"));
var _prestamopcController = require("../controller/prestamopc.controller.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var pc = (0, _express.Router)();
pc.get('/prestamoPC2', _middleware["default"], _prestamopcController.prestamoPcController.formularioPC);
pc.post('/insertarComputador', _middleware["default"], _prestamopcController.prestamoPcController.InsertarComputadores);
var _default = pc;
exports["default"] = _default;