import fetch from "node-fetch";

const inventario = (req, res) => {
    res.render('registroInventario.ejs')
};


const solicitud = async (req, res) => {
  try {
    const rutaRegistro = "http://localhost:3000/api/reserva";
    const rutaNoti = "http://localhost:3000/api/notificacion";

    const opciones = {
      method: "GET",
    };

    const [datosReserva, datosNoti] = await Promise.all([
      fetch(rutaRegistro, opciones).then(response => response.json()),
      fetch(rutaNoti, opciones).then(response => response.json())
    ]);

    res.render('registroSolicitud', {
      datosReserva: datosReserva[0],
     datosNoti:datosNoti[0]
    });
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }
  
};




export const registrosController = {
inventario,solicitud
};
 