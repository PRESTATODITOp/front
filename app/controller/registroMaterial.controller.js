import fetch from "node-fetch";
import Express from "express";
import path from "path";
import axios from "axios";
import pdfKit from "pdfkit"

const registroMaterial = async(req,res)=>{
    res.render('registroMaterial.ejs');
};


 const registroM = async (req, res) => {
  
  try {
    let data = {
    nombre: req.body.nombre,
    tipo: req.body.tipo,
    color: req.body.color,
    medidas: req.body.medidas,
    };

    const url = "http://localhost:3000/api/material";
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
      return res.redirect("/materialAdmin?alerta=1");
    }
  } catch (error) {
    console.error(error);
     // Manejar la respuesta del servidor cuando no es válida
    return res.redirect("/?alerta=2");
  }
};
   

  export const registroMaterialController = {
    registroMaterial, registroM
  };