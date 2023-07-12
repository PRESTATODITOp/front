import fetch from "node-fetch";
import Express from "express";
import path from "path";
import axios from "axios";
import pdfKit from "pdfkit"

const registroComputador = async(req,res)=>{
    res.render('registroPc.ejs');

   

};

const registroC = async (req, res) => {
  
  try {
    let data = {
   marca: req.body.marca,
    cargador: req.body.cargador,
    mouse: req.body.mouse
    };

    const url = "http://localhost:3000/api/computador";
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
      return res.redirect("/pcAdmin?alerta=1");
    }
  } catch (error) {
    console.error(error);
     // Manejar la respuesta del servidor cuando no es válida
    return res.redirect("/?alerta=2");
  }
};

  export const registroComputadorController = {
    registroComputador, registroC
  };