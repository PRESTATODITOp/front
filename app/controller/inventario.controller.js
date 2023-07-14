import fetch from "node-fetch";
import Express from "express";
import path from "path";
import axios from "axios";
import pdfKit from "pdfkit"

//INVENTARIO
const materiales = async (req, res) => {

    try {
  
  
      let ruta = "http://localhost:3000/api/material";
      let option = {
        method: "GET",
      }
      let datos = {};
      const result = await fetch(ruta, option)
        .then(response => response.json())
        .then(data => {
          datos = data[0]
          console.log(data[0]);
        })
        .catch(err => console.error("error en peticion" + err))
  
      res.render('materialAdmin', {
        "datos": datos
      });
  
    } catch (error) {
      res.redirect("/");
    }
  
  
  

  
  
  
  };

const pcAdmin = async (req, res) => {
 
    try {
        
  
        let ruta = "http://localhost:3000/api/computador";
        let option = {
            method: "GET",
        }
        let datos = {};
        const result = await fetch(ruta, option)
            .then(response => response.json())
            .then(data => {
                datos = data[0]
                console.log(data[0]);
            })
            .catch(err => console.error("error en peticion" + err))
  
        res.render('pcAdmin', {
            "datos": datos
        });
  
    } catch (error) {
        res.redirect("/");
    }
  
  
  };

const ambienteAdmin = async (req, res) => {
 
    try {
        
       
        let ruta = "http://localhost:3000/api/ambientes";
        let option = {
            method: "GET",
        }
        let datos = {};
        const result = await fetch(ruta, option)
            .then(response => response.json())
            .then(data => {
                datos = data[0]
                console.log(data[0]);
            })
            .catch(err => console.error("error en peticion" + err))
  
        res.render('ambienteAdmin', {
            "datos": datos
        });
  
    } catch (error) {
        res.redirect("/");
    }
  
  
  };

const herraAdmin= async (req, res) => {
 
    try {
        
        let ruta = "http://localhost:3000/api/herramientas";
        let option = {
            method: "GET",
        }
        let datos = {};
        const result = await fetch(ruta, option)
            .then(response => response.json())
            .then(data => {
                datos = data[0]
                console.log(data[0]);
            })
            .catch(err => console.error("error en peticion" + err))
            res.render('herraAdmin', {
              "datos": datos
          });
  
    } catch (error) {
        res.redirect("/");
    }
  
  
  };
//INVENTARIO


//RENDER VISTAS
const registroMaterial = async(req,res)=>{
  res.render('registroMaterial.ejs');
};

const registroComputador = async(req,res)=>{
  res.render('registroPc.ejs');
};

const registroAmbiente = async(req,res)=>{
  res.render('registroAmbiente.ejs');


};

const registroHerramienta = async(req,res)=>{
  res.render('registroHerramienta.ejs');

};
//RENDER VISTAS



//REGISTROS

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

const registroA = async (req, res) => {
  
  try {
    let data = {
    id_ambiente: req.body.id_ambiente,
    cantidad_sillas: req.body.cantidad_sillas,
    cantidad_mesas: req.body.cantidad_mesas,
    num_aprendices: req.body.num_aprendices,
    num_equipos: req.body.num_equipos,

    };

    const url = "http://localhost:3000/api/ambientes";
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

const registroH = async (req, res) => {
  
  try {
    let data = {
   tipo: req.body.tipo,
    color: req.body.color,
    };

    const url = "http://localhost:3000/api/herramientas";
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

//REGISTROS




  export const inventarioController = {
    materiales, pcAdmin, 
    ambienteAdmin, herraAdmin, 
    registroMaterial, registroM, 
    registroC, registroComputador, 
    registroAmbiente, registroA,
    registroH, registroHerramienta
  };