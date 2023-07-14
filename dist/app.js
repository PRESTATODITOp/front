"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireWildcard(require("express"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var url = _interopRequireWildcard(require("url"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _administradorRoutes = _interopRequireDefault(require("./routes/administrador.routes.js"));
var _aprendizRoutes = _interopRequireDefault(require("./routes/aprendiz.routes.js"));
var _comprobanteRoutes = _interopRequireDefault(require("./routes/comprobante.routes.js"));
var _coordinadorRoutes = _interopRequireDefault(require("./routes/coordinador.routes.js"));
var _instructorRoutes = _interopRequireDefault(require("./routes/instructor.routes.js"));
var _loginRoutes = _interopRequireDefault(require("./routes/login.routes.js"));
var _inventarioRoutes = _interopRequireDefault(require("./routes/inventario.routes.js"));
var _registroUsuariosRoutes = _interopRequireDefault(require("./routes/registroUsuarios.routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//import rutas

// import iconos from './routes/iconos.routes.js';

// const router = Router();
_dotenv["default"].config();
var app = (0, _express["default"])();
var _dirname = _path["default"].resolve();

//configuracion
app.set("port", process.env.PORT || 9999);
app.set("views", _path["default"].resolve(_path["default"].join(_dirname, "app", "views")));
//app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use('/resources', _express["default"]["static"]('public'));
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());

// middleware para procesar datos de formulario
app.use((0, _express.urlencoded)({
  extended: false
}));
app.use((0, _express.json)());

// Usar las rutas definidas en routes
app.use('/', _administradorRoutes["default"]);
app.use('/', _aprendizRoutes["default"]);
app.use('/', _comprobanteRoutes["default"]);
app.use('/', _coordinadorRoutes["default"]);
app.use('/', _aprendizRoutes["default"]);
app.use('/', _instructorRoutes["default"]);
app.use('/', _loginRoutes["default"]);
app.use('/', _inventarioRoutes["default"]);
app.use('/', _registroUsuariosRoutes["default"]);
// app.use('/', registrosUsers);
var _default = app;
exports["default"] = _default;