import fetch from "node-fetch";
import Express from "express";
import path from "path";
import axios from "axios";
import pdfKit from "pdfkit"

const registroHerramienta = async(req,res)=>{
    res.render('registroHerramienta.ejs');

};

const registroH = async (req, res) => {
  
  try {
    let data = {
   tipo: req.body.tipo,
    color: req.body.color,
    };

    const url = "http://localhost:3000/api/herramienta";
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
      return res.redirect("/herraAdmin?alerta=1");
    }
  } catch (error) {
    console.error(error);
     // Manejar la respuesta del servidor cuando no es válida
    return res.redirect("/?alerta=2");
  }
};

  export const registroHerramientaController = {
    registroHerramienta, registroH
  };