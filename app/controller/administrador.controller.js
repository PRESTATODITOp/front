import { response } from "express";
import fetch from "node-fetch";

const rolAdmin = (req, res) => {
  res.render("rol.ejs", { errorr: req.query.errorr });
};
const devolucionInsumos = async (req, res) => {
  try {
    const rutaRegistro = process.env.ENDPOINT + "/api/reserva";
    const rutaPrestamo = process.env.ENDPOINT + "/api/prestamos";

    const opciones = {
      method: "GET",
    };

    const [datosReserva, datosPrestamo] = await Promise.all([
      fetch(rutaRegistro, opciones).then((response) => response.json()),
      fetch(rutaPrestamo, opciones).then((response) => response.json()),
    ]);
     console.log(datosReserva);
     console.log(datosPrestamo);

    // Filtrar los datos para mostrar solo los elementos con el estado "ENTREGADO"
    const datosPrestamoFiltrados = datosPrestamo[0].filter((element) => {
      return element.ESTADO === "ENTREGADO";
    });

    res.render("devolucionInsumos", {
      datosReserva: datosReserva[0],
      datosPrestamo: datosPrestamoFiltrados,
    });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
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
    res.redirect("/devolucionInsumos");
  } catch (error) {
    res.redirect("/error");
  }
};

const insumosNoDevueltos = async (req, res) => {
  try {
    const rutaRegistro = process.env.ENDPOINT + "/api/reserva";
    const rutaPrestamo = process.env.ENDPOINT + "/api/prestamos";

    const opciones = {
      method: "GET",
    };

    const [datosReserva, datosPrestamo] = await Promise.all([
      fetch(rutaRegistro, opciones).then((response) => response.json()),
      fetch(rutaPrestamo, opciones).then((response) => response.json()),
    ]);

    // Filtrar los datos para mostrar solo los elementos con el estado "ENTREGADO"
    const datosPrestamoFiltrados = datosPrestamo[0].filter((element) => {
      return element.ESTADO === "POR ENTREGAR";
    });

    res.render("insumosNoDevueltos", {
      datosReserva: datosReserva[0],
      datosPrestamo: datosPrestamoFiltrados,
    });
  } catch (error) {
    console.error(error);
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
