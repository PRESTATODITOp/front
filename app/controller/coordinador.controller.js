// import jwt from 'jsonwebtoken';
import fetch from "node-fetch";


//FUNCIONES VISTA REPORTES
const reportes = (req, res) => {
  res.render('reportes.ejs');
};

//FUNCIONES VISTA SEGUIMIENTO
const segumiento = async (req, res) => {
  try {
    const rutaReserva = "http://localhost:3000/api/reserva";
    const rutaPrestamos = "http://localhost:3000/api/prestamos";

    const opciones = {
      method: "GET",
    };

    const [datosReserva, datosPrestamos] = await Promise.all([
      fetch(rutaReserva, opciones).then(response => response.json()),
      fetch(rutaPrestamos, opciones).then(response => response.json())
    ]);

    res.render('seguimiento', {
      datosReserva: datosReserva[0],
      datosPrestamos: datosPrestamos[0]
    });
    // let token = jwt.verify(req.cookies.PRESTATODITO, process.env.SECRET_KEY);
    
  } catch (error) {
    console.error(error);
    res.redirect("/aprobar");
  }

};

//FUNCIONES VISTA APROBAR
const aprobar = async (req, res) => {
  let datosReserva = {};
  try {

    let ruta = "http://localhost:3000/api/reserva";
    let option = {
      method: "GET",
    }

    const result = await fetch(ruta, option)
      .then(response => response.json())
      .then(data => {
        datosReserva = data[0]
        // console.log(data[0]);
      })
      .catch(err => console.error("error en peticion" + err))

    res.render('aprobar', {
      "datosReserva": datosReserva
    });

  } catch (error) {
    console.error("Error al ejecutar la función 'aprobar':", error);
    res.redirect("/");
  }



}


const aceptar = async (req, res) => {
  const idReserva = req.query.id; // obtengo el ID desde la api
  const idUsuario = req.query.iduser;

  const rutaObtenerReserva = "http://localhost:3000/api/reserva/" + idReserva;
  console.log(idReserva);

  try {
    const response = await fetch(rutaObtenerReserva);
    const reserva = await response.json();
    console.log(reserva); // Imprimir la respuesta JSON en la consola

    const data = {
      "id_reserva": parseInt(idReserva),
      "estado_aprobacion": "aprobado",
      "id_usuario": parseInt(idUsuario)
    };

    const rutaAceptar = "https://hook.us1.make.com/vrkpobbkvakrv6g0n8ztd8oe5nvg6twe";

    let option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    try {
      const responseAceptar = await fetch(rutaAceptar, option);

      const responseData = await responseAceptar.json();
      


      res.redirect("/seguimiento");
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  } catch (error) {
    console.error("Error al obtener la reserva:", error);
  }
};


const rechazar = async (req, res) => {
  const idReserva = req.query.id; // obtengo el ID desde la api
  const idUsuario = req.query.iduser;

  const rutaObtenerReserva = "http://localhost:3000/api/reserva/" + idReserva;

  try {
    const response = await fetch(rutaObtenerReserva);
    const reserva = await response.json();

    const data = {
      "id_reserva": parseInt(idReserva),
      "estado_aprobacion": "rechazado",
      "id_usuario": parseInt(idUsuario)
    };

    const ruta = "https://hook.us1.make.com/vrkpobbkvakrv6g0n8ztd8oe5nvg6twe";

    let option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    try {
      const responseRechazar = await fetch(ruta, option);

      const responseData = await responseRechazar.json();
   

      if (data && data > 0) {
      } else {
        // Manejar la respuesta del servidor cuando si es valida
        return res.redirect("/seguimiento?alerta=1");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  } catch (error) {
    console.error("Error al obtener la reserva:", error);
  }
};




export const coordinadorController = {
  segumiento, reportes, aprobar, aceptar,rechazar
};



