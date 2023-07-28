import { response } from "express";
import fetch from "node-fetch";

// Rutas get

const menuInstructor = (req, res) => {
  res.render('menu-instructor.ejs');
};

const formularioControlAula = async (req, res) => {
  res.render('controlAula.ejs');
 };

const formularioComputador = async (req, res) => {
  try {
    const rutaComputador = process.env.ENDPOINT +"/api/computador";

    // Realizar solicitud GET para obtener los datos existentes
    const getOptions = {
      method: "GET",
    };
    const getResponse = await fetch(rutaComputador, getOptions);
    const datosComputador = await getResponse.json();

    res.render('prestamoPcInstructor', {
      datosComputador: datosComputador[0], // Datos existentes
      // datosMaterialPost: datosMaterialPost // Datos insertados
    });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};

const respuestaPrestamo =  async (req, res) => {
  try {
    const rutaNotificacion = process.env.ENDPOINT +"/api/reserva";

    // Realizar solicitud GET para obtener los datos existentes
    const getOptions = {
      method: "GET",
    };
    const getResponse = await fetch(rutaNotificacion, getOptions);
    const datosNoti = await getResponse.json();

    res.render('respuestaPrestamo', {
      datosNoti: datosNoti[0]
    });
  } catch (error) {
    console.error(error);
    res.redirect("/");  
  }
};

const formularioMateriales = async (req, res) => {
  try {
    const rutaMaterial = process.env.ENDPOINT +"/api/material";

    // Realizar solicitud GET para obtener los datos existentes
    const getOptions = {
      method: "GET",
    };
    const getResponse = await fetch(rutaMaterial, getOptions);
    const datosMaterial = await getResponse.json();

    res.render('material', {
      datosMaterial: datosMaterial[0], // Datos existentes
      // datosMaterialPost: datosMaterialPost // Datos insertados
    });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};

const formularioAmbiente = async (req, res) => {
  try {
    const rutaAmbientes = process.env.ENDPOINT +"/api/ambientes";

    const opciones = {
      method: "GET",
    };

    const [datosAmbientes] = await Promise.all([
      fetch(rutaAmbientes, opciones).then(response => response.json())
    ]);

    res.render('ambientes', {
      datosAmbientes: datosAmbientes[0]
    });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};

const formularioHerramientas = async (req, res) => {
  try {
    const rutaHerramienta = process.env.ENDPOINT +"/api/herramientas";

    const opciones = {
      method: "GET",
    };

    const [datosHerramienta] = await Promise.all([
      fetch(rutaHerramienta, opciones).then(response => response.json())
    ]);

    res.render('herramientas', {
      datosHerramienta: datosHerramienta[0]
    });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};

// Rutas post

const InsertarMateriales = async (req, res) => {
  
  try {
    let data = {
      nombre_insumo: req.body.NOMBRE_MATERIAL,
      id_usuario : req.body.DOCUMENTO,
      cantidad : req.body.CANTIDAD,
      tipo_insumo: req.body.TIPO,
      caracteristicas: req.body.UNIDAD,
      jornada: req.body.JORNADA,
      fecha_res:req.body.FECHA,
      hora_res: req.body.HORA,
      tiempo_requerido:"00:00:00",
      id_reserva:"34567"
    };

    const url = process.env.ENDPOINT +"/api/insumosReserva"
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      
      body: JSON.stringify(data)
      
    };
    console.log(data);
    const response = await fetch(url, options)
    .then(response => response.json())
    .then(data =>{
      console.log(data);
    })
    .catch(error => console.log(error))

    // Inspeccionar la respuesta del servidor
    if (data && data > 0) {
    } else {
      // Manejar la respuesta del servidor cuando si es valida
      return res.redirect("/material?alerta=1");
    }
  } catch (error) {
    console.error(error);
     // Manejar la respuesta del servidor cuando no es válida
    return res.redirect("/?alerta=2");
  }
};

const InsertarHerramientas = async (req, res) => {
  
  try {
    let data = {
      nombre_insumo: req.body.NOMBRE_HERRA,
      id_usuario : req.body.DOCUMENTO,
      cantidad : req.body.CANTIDAD,
      tipo_insumo: req.body.TIPO,
      jornada: req.body.JORNADA,
      fecha_res:req.body.FECHA,
      hora_res: req.body.HORA,
      tiempo_requerido:"00:00:00",
      tipo_insumo:"herramienta",
      caracteristicas:"",
    };

    const url = process.env.ENDPOINT +"/api/insumosReserva";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      
      body: JSON.stringify(data)
      
    };
    console.log(data);
    const response = await fetch(url, options)
    .then(response => response.json())
    .then(data =>{
      console.log(data);
    })
    .catch(error => console.log(error))

    // Inspeccionar la respuesta del servidor
   

    if (data && data > 0) {
    } else {
      // Manejar la respuesta del servidor cuando si es valida
      return res.redirect("/herramientas?alerta=1");
    }
  } catch (error) {
    console.error(error);
     // Manejar la respuesta del servidor cuando no es válida
    return res.redirect("/?alerta=2");
  }
};

const InsertarAmbientes = async (req, res) => {
  
  try {
    let data = {
      nombre_insumo: req.body.ID_AMBIENTES,
      id_usuario : req.body.DOCUMENTO,
      jornada: req.body.JORNADA,
      fecha_res:req.body.FECHA,
      hora_res: req.body.HORA,
      cantidad: req.body.NUMERO_APRENDICES,
      tiempo_requerido:"00:00:00",
      tipo_insumo:"ambiente",
      caracteristicas:""
    };

    const url = process.env.ENDPOINT +"/api/insumosReserva";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      
      body: JSON.stringify(data)
      
    };
    console.log(data);
    const response = await fetch(url, options)
    .then(response => response.json())
    .then(data =>{
      console.log(data);
    })
    .catch(error => console.log(error))

    // Inspeccionar la respuesta del servidor
   

    if (data && data > 0) {
    } else {
      // Manejar la respuesta del servidor cuando si es valida
      return res.redirect("/ambientes?alerta=1");
    }
  } catch (error) {
    console.error(error);
     // Manejar la respuesta del servidor cuando no es válida
    return res.redirect("/?alerta=2");
  }
};

const InsertarComputador = async (req, res) => {
  
  try {
    let data = {
      nombre_insumo: req.body.ID_COMPUTADOR,
      id_usuario : req.body.DOCUMENTO,
      caracteristicas : req.body.MARCA,
      jornada: req.body.JORNADA,
      fecha_res:req.body.FECHA,
      hora_res: req.body.HORA,
      tiempo_requerido: req.body.TIEMPO,
      tipo_insumo:"computador",
      cantidad:"1"
    };

    const url = process.env.ENDPOINT +"/api/insumosReserva";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      
      body: JSON.stringify(data)
      
    };
    console.log(data);
    const response = await fetch(url, options)
    .then(response => response.json())
    .then(data =>{
      console.log(data);
    })
    .catch(error => console.log(error))

    // Inspeccionar la respuesta del servidor
   

    if (data && data > 0) {
    } else {
      // Manejar la respuesta del servidor cuando si es valida
      return res.redirect("/prestamoPcInstructor?alerta=1");
    }
  } catch (error) {
    console.error(error);
     // Manejar la respuesta del servidor cuando no es válida
    return res.redirect("/?alerta=2");
  }
};

const reporteAulas = async (req, res) => {
  
  try {
    let data = {
      id_usuario: req.body.DOCUMENTO,
      observaciones : req.body.OBSERVACIONES,
      fechaPrestamo:"00/00/00",
      final_prestamo :"0000/00/00"
    };

    const url = process.env.ENDPOINT +"/api/prestamos";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      
      body: JSON.stringify(data)
      
    };
    console.log(data);
    const response = await fetch(url, options)
    .then(response => response.json())
    .then(data =>{
      console.log(data);
    })
    .catch(error => console.log(error))

    // Inspeccionar la respuesta del servidor
   

    if (data && data > 0) {
    } else {
      // Manejar la respuesta del servidor cuando si es valida
      return res.redirect("/controlAula?alerta=1");
    }
  } catch (error) {
    console.error(error);
     // Manejar la respuesta del servidor cuando no es válida
    return res.redirect("/?alerta=2");
  }
};






export const instructorController = {
  formularioAmbiente,
  formularioControlAula,
  formularioHerramientas,
  formularioMateriales,
  formularioComputador,
  menuInstructor, 
  InsertarMateriales, 
  respuestaPrestamo,
  InsertarHerramientas,
  InsertarAmbientes,
  InsertarComputador, 
  reporteAulas
};