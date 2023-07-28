import { response } from "express";
import fetch from "node-fetch";

const rolAdmin = (req, res) => {
  res.render("rol.ejs", { errorr: req.query.errorr });
};

const devolucionInsumos = (req, res) => {
  res.render("devolucionInsumos.ejs");
};

const actualizarEstado = async (req, res) => {
  const idPrestamo = req.query.id;
  const estado = req.query.estado;
  console.log(idPrestamo);
  console.log(estado);

  const UpdateEstado = {
    estado: estado,
  };

  try {
    const ruta = process.env.ENDPOINT + "/api/prestamo/" + idPrestamo;
    const option = {
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

    // PAGINA EXITO
    res.redirect("/success");
  } catch (error) {
    res.redirect("/error");
  }
};

const insumosNoDevueltos = async (req, res) => {
  let insumosD = {};
  try {
    let rutaRegistro = process.env.ENDPOINT + "/api/reserva";
    let rutaPrestamo = process.env.ENDPOINT + "/api/prestamos";

    let opciones = {
      method: "GET",
    }; 
    
    const [datosReserva, datosPrestamo] = await Promise.all([
      fetch(rutaRegistro, opciones).then((response) => response.json()),
      fetch(rutaPrestamo, opciones).then((response) => response.json()),
    ]);

    const result = await fetch(rutaPrestamo, opciones)
      .then((response) => response.json())
      .then((data) => {
        let datosMap = data[0].map((element) => {
          if (element.ESTADO === "ENTREGADO") {
            return element;
          }
        });
 
        insumosD= datosMap.filter((input) => {
          return input !== undefined;
        });
      })
      .catch((err) => console.error("error en peticion" + err));

      res.render("insumosNoDevueltos", {
        insumosD:insumosD,
        datosReserva: datosReserva[0],
        datosPrestamo: datosPrestamo,
      });
  } catch (error) {
    console.error("Error al ejecutar la función 'aprobar':", error);
    res.redirect("/");
  }
};

// Cuando el documento está listo, se ejecuta la función de devolución de llamada.
const validarRol = (req, res) => {
  const selectedValue = req.body.selectRol;

  if (!selectedValue) {
    res.redirect("/rol?errorr=true");
  } else {
    let rol = "";
    switch (selectedValue) {
      case "1":
        rol = "/registroaprendiz";
        break;
      case "2":
        rol = "/registroinstructor";
        break;
      case "3":
        rol = "/registrocoordinador";
        break;
      case "4":
        rol = "/registroadministrador";
        break;
    }
    res.redirect(rol);
  }
};

const solicitud = async (req, res) => {
  try {
    const rutaRegistro = process.env.ENDPOINT + "/api/reserva";

    const opciones = {
      method: "GET",
    };

    const getResponse = await fetch(rutaRegistro, opciones);
    const datosReserva = await getResponse.json();

    res.render("registroSolicitud", {
      datosReserva: datosReserva[0], // Datos existentes
    });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
};

const usuariosRegistrados = async (req, res) => {
  try {
    let ruta = process.env.ENDPOINT + "/api/usuario";
    let option = {
      method: "GET",
    };
    let datos = {};
    const result = await fetch(ruta, option)
      .then((response) => response.json())
      .then((data) => {
        datos = data[0];
        console.log(data[0]);
      })
      .catch((err) => console.error("error en peticion" + err));

    res.render("usuariosRegistrados", {
      datosUsuarios: datos,
    });
  } catch (error) {
    res.redirect("/");
  }
};

export const administradorController = {
  rolAdmin,
  validarRol,
  solicitud,
  usuariosRegistrados,
  devolucionInsumos,
  insumosNoDevueltos,
  actualizarEstado, //actualizacion
};
