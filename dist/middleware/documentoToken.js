"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var validarDocumento = function validarDocumento(req, res, next) {
  var numeroDocumentoUsuario = req.body.DOCUMENTO;
  var verificarToken = _jsonwebtoken["default"].verify(req.cookies.PRESTATODITO, process.env.SECRET_KEY);
  console.log(verificarToken);
  if (numeroDocumentoUsuario == verificarToken.ID_USUARIO) {
    console.log(numeroDocumentoUsuario);
    console.log(verificarToken.ID_USUARIO);
    next();
  } else {
    // Mostrar alerta de error
    var mensajeError = "El número de documento ingresado no es válido, por favor verificar que sea el correcto";
    res.send("<script>alert(\"".concat(mensajeError, "\"); window.location.replace('/?alerta=3');// Reemplazar con la ruta deseada</script>"));
  }
};
var _default = validarDocumento;
exports["default"] = _default;