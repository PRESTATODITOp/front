// import jwt from 'jsonwebtoken';
import fetch from "node-fetch";

//FUNCIONES VISTA REPORTES
const reportes = (req, res) => {
  res.render("reportes.ejs");
};

//FUNCIONES VISTA SEGUIMIENTO
const segumiento = async (req, res) => {
  try {
    const rutaReserva = process.env.ENDPOINT + "/api/reserva";
    const rutaPrestamos = process.env.ENDPOINT + "/api/prestamos";

    const opciones = {
      method: "GET",
    };

    const [datosReserva, datosPrestamos] = await Promise.all([
      fetch(rutaReserva, opciones).then((response) => response.json()),
      fetch(rutaPrestamos, opciones).then((response) => response.json()),
    ]);

    res.render("seguimiento", {
      datosReserva: datosReserva[0],
      datosPrestamos: datosPrestamos[0],
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
    let ruta = process.env.ENDPOINT + "/api/reserva";
    let option = {
      method: "GET",
    };

    const result = await fetch(ruta, option)
      .then((response) => response.json())
      .then((data) => {
        let datosMap = data[0].map((element) => {
          if (element.ESTADO === "revision") {
            return element;
          }
        });
        
       datosReserva = datosMap.filter((input) => {
          return input !== undefined;
        });
      })
      .catch((err) => console.error("error en peticion" + err));

    res.render("aprobar", {
      datosReserva: datosReserva,
    });
  } catch (error) {
    console.error("Error al ejecutar la función 'aprobar':", error);
    res.redirect("/");
  }
};

const aceptar = async (req, res) => {
  const idReserva = req.query.id; // obtengo el ID desde la api
  const idUsuario = req.query.iduser;
  const estado = req.query.estado;

  const UpdateEstado = {
    estado: estado,
  };

  const dataHook ={
    id_reserva: idReserva,
    estado: estado,
    id_usuario: idUsuario
  }
  try {
    let ruta = process.env.ENDPOINT + "/api/estado/" + idReserva;
    let option = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdateEstado),
    };

    await fetch(ruta, option)
      .then((response) => response.json())
      .then((resEstado) => {
        console.log(resEstado);
      });

      let webhook = "https://hook.us1.make.com/yj6243kky7a4wh5rxnc74nf50426jxj3";
      let options ={
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataHook),
      } 
      await fetch(webhook, options)
      .then((response) => response.json())
      .then((resHook) => {
        res.redirect("/aprobar")
      });


  } catch (error) {
    res.redirect("/aprobar")
  }
};

const rechazar = async (req, res) => {
  const idReserva = req.query.id; // obtengo el ID desde la api
  const idUsuario = req.query.iduser;
  const estado = req.query.estado;

  const UpdateEstado = {
    estado: estado,
  };

  const dataHook ={
    id_reserva: idReserva,
    estado: estado,
    id_usuario: idUsuario
  }
  try {
    let ruta = process.env.ENDPOINT + "/api/estado/" + idReserva;
    let option = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdateEstado),
    };

    await fetch(ruta, option)
      .then((response) => response.json())
      .then((resEstado) => {
        console.log(resEstado);
      });

      let webhook = "https://hook.us1.make.com/yj6243kky7a4wh5rxnc74nf50426jxj3";
      let options ={
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataHook),
      } 
      await fetch(webhook, options)
      .then((response) => response.json())
      .then((resHook) => {
        res.redirect("/aprobar")
      });

  } catch (error) {
    res.redirect("/aprobar")
  }
};

export const coordinadorController = {
  segumiento,
  reportes,
  aprobar,
  aceptar,
  rechazar,
};
