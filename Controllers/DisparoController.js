'use strict'

const Disparo = require ('../Models/Disparo')

/*
CODIGOS DE ERROR A APLICAR EN RES.STATUS:
500 - Internal Server Error, fallo del servidor, generalmente es que no se ha podido acceder a la BBDD por lo que sea.
404 - Not found, esto quiere decir que no se encuentra la información (el usuario que se busca no existe).
400 - Forbidden, no se disponen de credenciales para acceder a la info, o ésta es privada.
200 - OK, se devuelve la info solicitada junto con este código.

Hay muchos más, pero no los necesitamos en este caso concreto. Todos los métodos deben tratar estas excepciones.

(Es el único y último comentario que os pongo en español, pero quería asegurarme de que lo entendiérais).
*/

function getDisparo (req, res) {
  Disparo.find({}, (err, disparos) => {
    if(err) return res.status(500).send({message: `Error while processing request`})
    if(!disparo) return res.status(404).send({message: `No shots found`})

    res.status(200).send({disparos})
  })
}
function getOneDisparo (req,res){
  Disparo.find({IdEmisor: IdEmisor},(err, disparo)=> {
    if(err) return res.status(500).send({message: `Error while processing request`})
    if(!disparo) return res.status(404).send({message: `No shots found`})
    res.status(200).send({disparo})
  })
}
function createDisparo (req, res) {
  let disparo = new Disparo ()
  disparo.IdEmisor=req.body.IdEmisor;
  disparo.IdReceptor=req.body.IdReceptor;
  console.log(disparo)
  disparo.save(function (err, userSaved) {
    if(err) res.status(500).send({message: `Error while processing request: ${err}`});
    else{
      res.status(200).send({message: `Shot created`})
    }
  })
}
module.exports = {
  getDisparo,
  createDisparo
}
