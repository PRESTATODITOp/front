import fetch from "node-fetch";

// Rutas get

const menuAprendiz = (req, res) => {
  res.render('menu-aprendiz.ejs');
};

const controlCompu = (req, res) => {
  res.render('controlcom.ejs');
};

const formularioPC = async (req, res) => {
  try {
    const rutaComputador ="http://localhost:3000/api/computador";

    // Realizar solicitud GET para obtener los datos existentes
    const getOptions = {
      method: "GET",
    };
    const getResponse = await fetch(rutaComputador, getOptions);
    const datosComputador = await getResponse.json();

    res.render('prestamoPC2', {
      datosComputador: datosComputador[0], // Datos existentes
      // datosMaterialPost: datosMaterialPost // Datos insertados
    });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};

const seguimientoA =  async (req, res) => {
  let datosReserva = {};
 try {
   const rutaReserva = "http://localhost:3000/api/reserva";
  
   // Realizar solicitud GET para obtener los datos existentes
   const getOptions = {
     method: "GET",
   };
   const getResponse = await fetch(rutaReserva, getOptions)
   const datosReserva = await getResponse.json()
  .then(response => response.json())
   .then(data => {
     datosReserva = data[0]
     console.log(data[0]);
   })
   .catch(err => console.error("error en peticion" + err))

   res.render('seguimientoA', {
     datosReserva: datosReserva
   });
  
 } catch (error) {
   console.error(error);
   res.redirect("/seguimientoA");
 }
};

// Rutas post

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

    const url = "http://localhost:3000/api/insumosReserva";
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
      return res.redirect("/prestamoPc2?alerta=1");
    }
  } catch (error) {
    console.error(error);
     // Manejar la respuesta del servidor cuando no es válida
    return res.redirect("/?alerta=2");
  }
};

const Insertareportepc = async (req, res) => {

  try {
    let data = {
      id_usuario: req.body.id_usuario,
      observaciones: req.body.observaciones,
    };

    const url = "http://localhost:3000/api/prestamos";
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
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error))

    // Inspeccionar la respuesta del servidor


    if (data && data > 0) {
    } else {
      // Manejar la respuesta del servidor cuando si es valida
      return res.redirect("/controlcom?alerta=1");
    }
  } catch (error) {
    console.error(error);
    // Manejar la respuesta del servidor cuando no es válida
    return res.redirect("/?alerta=2");
  }
};



export const aprendizController = {
  menuAprendiz, controlCompu, Insertareportepc, formularioPC, InsertarComputador, seguimientoA
};


