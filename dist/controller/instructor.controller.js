"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instructorController = void 0;
var _express = require("express");
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// Rutas get

var menuInstructor = function menuInstructor(req, res) {
  res.render('menu-instructor.ejs');
};
var formularioControlAula = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          res.render('controlAula.ejs');
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function formularioControlAula(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var formularioComputador = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var rutaComputador, getOptions, getResponse, datosComputador;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          rutaComputador = process.env.ENDPOINT + "/api/computador"; // Realizar solicitud GET para obtener los datos existentes
          getOptions = {
            method: "GET"
          };
          _context2.next = 5;
          return (0, _nodeFetch["default"])(rutaComputador, getOptions);
        case 5:
          getResponse = _context2.sent;
          _context2.next = 8;
          return getResponse.json();
        case 8:
          datosComputador = _context2.sent;
          res.render('prestamoPcInstructor', {
            datosComputador: datosComputador[0] // Datos existentes
            // datosMaterialPost: datosMaterialPost // Datos insertados
          });
          _context2.next = 16;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          res.redirect("/");
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return function formularioComputador(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var respuestaPrestamo = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var rutaNotificacion, getOptions, getResponse, datosNoti;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          rutaNotificacion = process.env.ENDPOINT + "/api/reserva"; // Realizar solicitud GET para obtener los datos existentes
          getOptions = {
            method: "GET"
          };
          _context3.next = 5;
          return (0, _nodeFetch["default"])(rutaNotificacion, getOptions);
        case 5:
          getResponse = _context3.sent;
          _context3.next = 8;
          return getResponse.json();
        case 8:
          datosNoti = _context3.sent;
          res.render('respuestaPrestamo', {
            datosNoti: datosNoti[0]
          });
          _context3.next = 16;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          res.redirect("/");
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return function respuestaPrestamo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var formularioMateriales = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var rutaMaterial, getOptions, getResponse, datosMaterial;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          rutaMaterial = process.env.ENDPOINT + "/api/material"; // Realizar solicitud GET para obtener los datos existentes
          getOptions = {
            method: "GET"
          };
          _context4.next = 5;
          return (0, _nodeFetch["default"])(rutaMaterial, getOptions);
        case 5:
          getResponse = _context4.sent;
          _context4.next = 8;
          return getResponse.json();
        case 8:
          datosMaterial = _context4.sent;
          res.render('material', {
            datosMaterial: datosMaterial[0] // Datos existentes
            // datosMaterialPost: datosMaterialPost // Datos insertados
          });
          _context4.next = 16;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          res.redirect("/");
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return function formularioMateriales(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var formularioAmbiente = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var rutaAmbientes, opciones, _yield$Promise$all, _yield$Promise$all2, datosAmbientes;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          rutaAmbientes = process.env.ENDPOINT + "/api/ambientes";
          opciones = {
            method: "GET"
          };
          _context5.next = 5;
          return Promise.all([(0, _nodeFetch["default"])(rutaAmbientes, opciones).then(function (response) {
            return response.json();
          })]);
        case 5:
          _yield$Promise$all = _context5.sent;
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 1);
          datosAmbientes = _yield$Promise$all2[0];
          res.render('ambientes', {
            datosAmbientes: datosAmbientes[0]
          });
          _context5.next = 15;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          res.redirect("/");
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return function formularioAmbiente(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var formularioHerramientas = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var rutaHerramienta, opciones, _yield$Promise$all3, _yield$Promise$all4, datosHerramienta;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          rutaHerramienta = process.env.ENDPOINT + "/api/herramientas";
          opciones = {
            method: "GET"
          };
          _context6.next = 5;
          return Promise.all([(0, _nodeFetch["default"])(rutaHerramienta, opciones).then(function (response) {
            return response.json();
          })]);
        case 5:
          _yield$Promise$all3 = _context6.sent;
          _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 1);
          datosHerramienta = _yield$Promise$all4[0];
          res.render('herramientas', {
            datosHerramienta: datosHerramienta[0]
          });
          _context6.next = 15;
          break;
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          res.redirect("/");
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 11]]);
  }));
  return function formularioHerramientas(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

// Rutas post

var InsertarMateriales = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var data, url, options, _response;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          data = {
            nombre_insumo: req.body.NOMBRE_MATERIAL,
            id_usuario: req.body.DOCUMENTO,
            cantidad: req.body.CANTIDAD,
            tipo_insumo: req.body.TIPO,
            caracteristicas: req.body.UNIDAD,
            jornada: req.body.JORNADA,
            fecha_res: req.body.FECHA,
            hora_res: req.body.HORA,
            tiempo_requerido: "00:00:00",
            id_reserva: "34567"
          };
          url = process.env.ENDPOINT + "/api/insumosReserva";
          options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          };
          console.log(data);
          _context7.next = 7;
          return (0, _nodeFetch["default"])(url, options).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);
          })["catch"](function (error) {
            return console.log(error);
          });
        case 7:
          _response = _context7.sent;
          if (!(data && data > 0)) {
            _context7.next = 11;
            break;
          }
          _context7.next = 12;
          break;
        case 11:
          return _context7.abrupt("return", res.redirect("/material?alerta=1"));
        case 12:
          _context7.next = 18;
          break;
        case 14:
          _context7.prev = 14;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          // Manejar la respuesta del servidor cuando no es válida
          return _context7.abrupt("return", res.redirect("/?alerta=2"));
        case 18:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 14]]);
  }));
  return function InsertarMateriales(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var InsertarHerramientas = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _data, data, url, options, _response2;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          data = (_data = {
            nombre_insumo: req.body.NOMBRE_HERRA,
            id_usuario: req.body.DOCUMENTO,
            cantidad: req.body.CANTIDAD,
            tipo_insumo: req.body.TIPO,
            jornada: req.body.JORNADA,
            fecha_res: req.body.FECHA,
            hora_res: req.body.HORA,
            tiempo_requerido: "00:00:00"
          }, _defineProperty(_data, "tipo_insumo", "herramienta"), _defineProperty(_data, "caracteristicas", ""), _data);
          url = process.env.ENDPOINT + "/api/insumosReserva";
          options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          };
          console.log(data);
          _context8.next = 7;
          return (0, _nodeFetch["default"])(url, options).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);
          })["catch"](function (error) {
            return console.log(error);
          });
        case 7:
          _response2 = _context8.sent;
          if (!(data && data > 0)) {
            _context8.next = 11;
            break;
          }
          _context8.next = 12;
          break;
        case 11:
          return _context8.abrupt("return", res.redirect("/herramientas?alerta=1"));
        case 12:
          _context8.next = 18;
          break;
        case 14:
          _context8.prev = 14;
          _context8.t0 = _context8["catch"](0);
          console.error(_context8.t0);
          // Manejar la respuesta del servidor cuando no es válida
          return _context8.abrupt("return", res.redirect("/?alerta=2"));
        case 18:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 14]]);
  }));
  return function InsertarHerramientas(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var InsertarAmbientes = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var data, url, options, _response3;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          data = {
            nombre_insumo: req.body.ID_AMBIENTES,
            id_usuario: req.body.DOCUMENTO,
            jornada: req.body.JORNADA,
            fecha_res: req.body.FECHA,
            hora_res: req.body.HORA,
            cantidad: req.body.NUMERO_APRENDICES,
            tiempo_requerido: "00:00:00",
            tipo_insumo: "ambiente",
            caracteristicas: ""
          };
          url = process.env.ENDPOINT + "/api/insumosReserva";
          options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          };
          console.log(data);
          _context9.next = 7;
          return (0, _nodeFetch["default"])(url, options).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);
          })["catch"](function (error) {
            return console.log(error);
          });
        case 7:
          _response3 = _context9.sent;
          if (!(data && data > 0)) {
            _context9.next = 11;
            break;
          }
          _context9.next = 12;
          break;
        case 11:
          return _context9.abrupt("return", res.redirect("/ambientes?alerta=1"));
        case 12:
          _context9.next = 18;
          break;
        case 14:
          _context9.prev = 14;
          _context9.t0 = _context9["catch"](0);
          console.error(_context9.t0);
          // Manejar la respuesta del servidor cuando no es válida
          return _context9.abrupt("return", res.redirect("/?alerta=2"));
        case 18:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 14]]);
  }));
  return function InsertarAmbientes(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var InsertarComputador = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var data, url, options, _response4;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          data = {
            nombre_insumo: req.body.ID_COMPUTADOR,
            id_usuario: req.body.DOCUMENTO,
            caracteristicas: req.body.MARCA,
            jornada: req.body.JORNADA,
            fecha_res: req.body.FECHA,
            hora_res: req.body.HORA,
            tiempo_requerido: req.body.TIEMPO,
            tipo_insumo: "computador",
            cantidad: "1"
          };
          url = process.env.ENDPOINT + "/api/insumosReserva";
          options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          };
          console.log(data);
          _context10.next = 7;
          return (0, _nodeFetch["default"])(url, options).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);
          })["catch"](function (error) {
            return console.log(error);
          });
        case 7:
          _response4 = _context10.sent;
          if (!(data && data > 0)) {
            _context10.next = 11;
            break;
          }
          _context10.next = 12;
          break;
        case 11:
          return _context10.abrupt("return", res.redirect("/prestamoPcInstructor?alerta=1"));
        case 12:
          _context10.next = 18;
          break;
        case 14:
          _context10.prev = 14;
          _context10.t0 = _context10["catch"](0);
          console.error(_context10.t0);
          // Manejar la respuesta del servidor cuando no es válida
          return _context10.abrupt("return", res.redirect("/?alerta=2"));
        case 18:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 14]]);
  }));
  return function InsertarComputador(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var reporteAulas = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var data, url, options, _response5;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          data = {
            id_usuario: req.body.DOCUMENTO,
            observaciones: req.body.OBSERVACIONES,
            fechaPrestamo: "00/00/00",
            final_prestamo: "0000/00/00"
          };
          url = process.env.ENDPOINT + "/api/prestamos";
          options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          };
          console.log(data);
          _context11.next = 7;
          return (0, _nodeFetch["default"])(url, options).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);
          })["catch"](function (error) {
            return console.log(error);
          });
        case 7:
          _response5 = _context11.sent;
          if (!(data && data > 0)) {
            _context11.next = 11;
            break;
          }
          _context11.next = 12;
          break;
        case 11:
          return _context11.abrupt("return", res.redirect("/controlAula?alerta=1"));
        case 12:
          _context11.next = 18;
          break;
        case 14:
          _context11.prev = 14;
          _context11.t0 = _context11["catch"](0);
          console.error(_context11.t0);
          // Manejar la respuesta del servidor cuando no es válida
          return _context11.abrupt("return", res.redirect("/?alerta=2"));
        case 18:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 14]]);
  }));
  return function reporteAulas(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var instructorController = {
  formularioAmbiente: formularioAmbiente,
  formularioControlAula: formularioControlAula,
  formularioHerramientas: formularioHerramientas,
  formularioMateriales: formularioMateriales,
  formularioComputador: formularioComputador,
  menuInstructor: menuInstructor,
  InsertarMateriales: InsertarMateriales,
  respuestaPrestamo: respuestaPrestamo,
  InsertarHerramientas: InsertarHerramientas,
  InsertarAmbientes: InsertarAmbientes,
  InsertarComputador: InsertarComputador,
  reporteAulas: reporteAulas
};
exports.instructorController = instructorController;