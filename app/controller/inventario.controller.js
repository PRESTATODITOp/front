import fetch from "node-fetch";
import Express from "express";
import path from "path";
import axios from "axios";
import pdfKit from "pdfkit"

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
  
  
    } catch (error) {
        res.redirect("/");
    }
  
  
  };


//REGISTROS 




  export const inventarioController = {
    materiales, pcAdmin, ambienteAdmin, herraAdmin
  };