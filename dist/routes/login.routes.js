"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _loginController = require("../controller/login.controller.js");
var login = (0, _express.Router)();
login.get('/', function (req, res) {
  res.render('index.ejs');
});
login.post("/autentificacion", _loginController.loginController.validacionLogin);
login.get('/cerrarsesion', _loginController.loginController.cerrarsesion);
login.get('/index', _loginController.loginController.index);
login.get('/denegado', _loginController.loginController.denegado);
var _default = login;
exports["default"] = _default;