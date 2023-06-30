import fetch from "node-fetch";
import Express from "express";
import path from "path";
import axios from "axios";
import pdfKit from "pdfkit"

const registroInstructor = async(req,res)=>{
    res.render('registroinstructor.ejs');

   

};

  export const registroInstructorController = {
    registroInstructor
  };