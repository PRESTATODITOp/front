import path from 'path';
import axios from "axios";
import excel from "exceljs"
import PDFDocument from "pdfkit-table";
import moment from 'moment-timezone';
import jwt from "jsonwebtoken";



const generarPdf = async (req, res) => {
  try {
    // Hacer una solicitud GET a la API para obtener la información
    const response = await axios.get(process.env.ENDPOINT + "/api/material");
    const materialData = response.data[0]; // Obtener el primer elemento del arreglo

    // Crear un nuevo documento PDF
    const doc = new PDFDocument({ margin: 30, size: 'A4' });

    // Stream el contenido PDF a la respuesta HTTP
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=material.pdf');
    doc.pipe(res);

    // Agregar el logo del proyecto

    //arreglo
    const logoHeight = 50;
    const logoWidth = 50;
    const __dirname = path.resolve()
    const imagePath = path.resolve(path.join(__dirname, 'public', 'img', 'logoSena.png'));

    const pageWidth = doc.page.width;
    const pageHeight = doc.page.height;

    const logoX = (pageWidth - logoWidth) / 2;
    const logoY = 30;

    doc.image(imagePath, logoX, logoY, { width: logoWidth, height: logoHeight });

    // Agregar espacio después de la imagen
    doc.moveDown(2);

    // Agregar el encabezado
    doc.fontSize(24).text('Registro de materiales', { align: 'center' });

    // Agregar espacio después del encabezado
    doc.moveDown();

    // Crear la tabla
    const table = {
      headers: ['Numero del material', 'Nombre del material', 'Tipo de material', 'Color del material', 'Medida del material'],
      rows: materialData.map(material => [
        material.ID_MATERIAL,
        material.NOMBRE,
        material.TIPO,
        material.COLOR,
        material.MEDIDAS
      ])
    };

    // Agregar la tabla al documento con un tamaño de letra más pequeño
    await doc.table(table, { width: 500, prepareHeader: () => doc.font('Helvetica-Bold').fontSize(10), prepareRow: () => doc.font('Helvetica').fontSize(10) });

    // Obtener el nombre del usuario generado por la API
    const validarToken = jwt.verify(req.cookies.PRESTATODITO, process.env.SECRET_KEY);
    let ruta = process.env.ENDPOINT + `/api/usuario/${validarToken.ID_USUARIO}`;

    let nombres = '';
    await axios.get(ruta)
      .then((response) => {
        nombres = `${response.data[0][0].NOMBRE} ${response.data[0][0].APELLIDO}`;
      })
      .catch((err) => console.error("error en peticion" + err));

    // Agregar los detalles en el pie de página
    const fechaActual = moment().tz('America/Bogota').format('YYYY-MM-DD h:mm:ss A');
    const generadoPor = `Generado por: ${nombres}`;
    doc.fontSize(10).text(fechaActual, { align: 'center', opacity: 0.5 });
    doc.fontSize(10).text(generadoPor, { align: 'center', opacity: 0.5 });

    // Finalizar el PDF
    doc.end();
  } catch (error) {
    // Manejar errores de solicitud o cualquier otro error
    console.error(error);
    res.status(500).send('Error al generar el PDF');
  }
};


const imprimirPDFC = async (req, res) => {
  try {
    // Hacer una solicitud GET a la API para obtener la información
    const response = await axios.get(process.env.ENDPOINT + "/api/ambientes");
    const ambienteData = response.data[0]; // Obtener el primer elemento del arreglo

    // Crear un nuevo documento PDF
    const doc = new PDFDocument({ margin: 30, size: 'A4' });

    // Stream el contenido PDF a la respuesta HTTP
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=ambiente.pdf');
    doc.pipe(res);

    // Agregar el logo del proyecto
    const logoHeight = 50;
    const logoWidth = 50;
    const __dirname = path.resolve()
    const imagePath = path.resolve(path.join(__dirname, 'public', 'img', 'logoSena.png'));

    const pageWidth = doc.page.width;
    const pageHeight = doc.page.height;

    const logoX = (pageWidth - logoWidth) / 2;
    const logoY = 30;

    doc.image(imagePath, logoX, logoY, { width: logoWidth, height: logoHeight });

    // Agregar espacio después de la imagen
    doc.moveDown(2);

    // Agregar el encabezado
    doc.fontSize(24).text('Reporte de Ambientes', { align: 'center' });

    // Agregar espacio después del encabezado
    doc.moveDown();

    // Crear la tabla
    const table = {
      headers: ['Numero ambiente', 'Cantidad sillas', 'Cantidad mesas', 'Numero aprendices', 'Numero equipos'],
      rows: ambienteData.map(ambiente => [
        ambiente.ID_AMBIENTES,
        ambiente.CANT_SILLAS,
        ambiente.CANT_MESAS,
        ambiente.NUM_APRENDICES,
        ambiente.NUM_EQUIPOS
      ])
    };

    // Agregar la tabla al documento con un tamaño de letra más pequeño
    await doc.table(table, { width: 500, prepareHeader: () => doc.font('Helvetica-Bold').fontSize(10), prepareRow: () => doc.font('Helvetica').fontSize(10) });

    // Agregar el pie de página
    const generador = 'prestaTodito';
    const fechaImpresion = new Date().toLocaleString();
    doc.fontSize(10).text(`Generado por: ${generador}`);
    doc.fontSize(10).text(`Fecha y hora de impresión: ${fechaImpresion}`, { align: 'right' });

    // Finalizar el PDF
    doc.end();
  } catch (error) {
    // Manejar errores de solicitud o cualquier otro error
    console.error(error);
    res.status(500).send('Error al generar el PDF');
  }
};



const generarexcel = async (req, res) => {
  try {
    // Hacer una solicitud GET a la API para obtener la información
    const response = await axios.get(process.env.ENDPOINT + "/api/material");
    const materialData = response.data[0]; // Obtener el primer elemento del arreglo

    // Crear un nuevo libro de Excel
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('Material');

    // Mostrar información por consola
    console.log('Información del material:');
    materialData.forEach((material) => {
      console.log(`ID: ${material.ID_MATERIAL}`);
      console.log(`Nombre del material: ${material.NOMBRE}`);
      console.log(`Tipo de material: ${material.TIPO}`);
      console.log(`Estado del material: ${material.ESTADO}`);
      console.log(`Cantidad del material: ${material.CANTIDAD}`);
      console.log(`Color del material: ${material.COLOR}`);
      console.log(`Medida del material: ${material.MEDIDA}`);
    });

    // Agregar encabezados de columna
    worksheet.columns = [
      { header: 'ID', key: 'ID_MATERIAL', width: 10 },
      { header: 'Nombre del material', key: 'NOMBRE', width: 20 },
      { header: 'Tipo de material', key: 'TIPO', width: 15 },
      { header: 'Estado del material', key: 'ESTADO', width: 15 },
      { header: 'Cantidad del material', key: 'CANTIDAD', width: 15 },
      { header: 'Color del material', key: 'COLOR', width: 15 },
      { header: 'Medida del material', key: 'MEDIDA', width: 15 },
    ];

    // Agregar filas con datos
    materialData.forEach((material) => {
      worksheet.addRow({
        ID_MATERIAL: material.ID_MATERIAL,
        NOMBRE: material.NOMBRE,
        TIPO: material.TIPO,
        ESTADO: material.ESTADO,
        CANTIDAD: material.CANTIDAD,
        COLOR: material.COLOR,
        MEDIDA: material.MEDIDA,
      });
    });

    // Stream el contenido Excel a la respuesta HTTP
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=material.xlsx');
    await workbook.xlsx.write(res);

    // Finalizar la escritura del libro de Excel
    res.end();
  } catch (error) {
    // Manejar errores de solicitud o cualquier otro error
    console.error(error);
    res.status(500).send('Error al generar el archivo Excel');
  }
};

const imprimirEXCELC = async (req, res) => {
  try {
    // Hacer una solicitud GET a la API para obtener la información
    const response = await axios.get(process.env.ENDPOINT + "/api/material");
    const materialData = response.data[0]; // Obtener el primer elemento del arreglo

    // Crear un nuevo libro de Excel
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('Ambientes');


    // Agregar encabezados de columna
    worksheet.columns = [
      { header: 'Numero de ambiente', key: 'ID_AMBIENTES', width: 10 },
      { header: 'Cantidad de sillas', key: 'CANT_SILLAS', width: 20 },
      { header: 'Cantidad de mesas', key: 'CANT_MESAS', width: 15 },
      { header: 'Cantidad de aprendices', key: 'NUM_APRENDICES', width: 15 },
      { header: 'Cantidad de equipos', key: 'NUM_EQUIPOS', width: 15 }
    ];

    // Agregar filas con datos
    materialData.forEach((ambiente) => {
      worksheet.addRow({
        ID_AMBIENTES: ambiente.ID_AMBIENTES,
        CANT_SILLAS: ambiente.CANT_SILLAS,
        CANT_MESAS: ambiente.CANT_MESAS,
        NUM_APRENDICES: ambiente.NUM_APRENDICES,
        NUM_EQUIPOS: ambiente.NUM_EQUIPOS

      });
    });

    // Stream el contenido Excel a la respuesta HTTP
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=reporte de ambientes.xlsx');
    await workbook.xlsx.write(res);

    // Finalizar la escritura del libro de Excel
    res.end();
  } catch (error) {
    // Manejar errores de solicitud o cualquier otro error
    console.error(error);
    res.status(500).send('Error al generar el archivo Excel');
  }
};

export const comprobanteController = {
  generarPdf,
  generarexcel,
  imprimirPDFC,
  imprimirEXCELC
};


