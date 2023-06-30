import fetch from "node-fetch";
import Express from "express";
import path from "path";
import axios from "axios";
import pdfKit from "pdfkit"

const registroAmbiente = async(req,res)=>{
    res.render('registroAmbiente.ejs');

  
};

const registroA = async (req, res) => {
  
  try {
    let data = {
    id_ambiente: req.body.id_ambiente,
    cantidad_sillas: req.body.cantidad_sillas,
    cant_mesas: req.body.cant_mesas,
    num_aprendices: req.body.num_aprendices,
    num_equipos: req.body.num_equipos,

    };

    const url = "http://localhost:3000/api/ambiente";
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
      return res.redirect("/ambienteAdmin?alerta=1");
    }
  } catch (error) {
    console.error(error);
     // Manejar la respuesta del servidor cuando no es válida
    return res.redirect("/?alerta=2");
  }
};

  export const registroAmbienteController = {
    registroAmbiente, registroA
  };