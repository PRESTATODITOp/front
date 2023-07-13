import express, { Router, urlencoded, json } from 'express';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import * as url from "url";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

//import rutas
import administrador from './routes/administrador.routes.js';
import aprendiz from './routes/aprendiz.routes.js';
import comprobante from './routes/comprobante.routes.js';
import coordi from './routes/coordinador.routes.js';
// import iconos from './routes/iconos.routes.js';
import instructor from './routes/instructor.routes.js';
import login from './routes/login.routes.js';
import inventario from './routes/inventario.routes.js';
import registroUsuarios from './routes/registroUsuarios.routes.js';


// const router = Router();
dotenv.config();
const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

//configuracion
app.set("port", process.env.PORT || 9999);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use('/resources', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// middleware para procesar datos de formulario
app.use(urlencoded({ extended: false }));
app.use(json());



// Usar las rutas definidas en routes
app.use('/', administrador);
app.use('/', aprendiz);
app.use('/', comprobante);
app.use('/', coordi);
app.use('/', aprendiz);
app.use('/', instructor);
app.use('/', login);
app.use('/', inventario);
app.use('/', registroUsuarios);
// app.use('/', registrosUsers);



export default app;