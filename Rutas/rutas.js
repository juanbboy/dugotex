const express = require("express");
const ruta = express.Router();

let modeloDatos = require("../Modelo/modelo");

ruta.get('/',(req, res) => {
    modeloDatos.find((error, data, next) => {
      if (error) {
        return next(error);
      } else {
        console.log(error);
        res.json(data);
      }
    });
  });
  
  ruta.post('registrar',(req, res, next) => {
    modeloDatos.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });

  module.exports = ruta;