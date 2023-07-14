"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var instruToken = function instruToken(req, res, next) {
  try {
    var token = req.cookies.PRESTATODITO;

    //si no hay token entonces redirigase a acceso denegado
    if (!token) {
      return res.redirect('/denegado');
    }
    var verificarToken = _jsonwebtoken["default"].verify(req.cookies.PRESTATODITO, process.env.SECRET_KEY);
    if (verificarToken.ID_ROL === 2) {
      // Si el token es válido y la verificación es exitosa continua
      next();
    } else {
      return res.redirect('/delete');
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: 'Error al verificar el token'
    });
  }
};
var _default = instruToken;
exports["default"] = _default;