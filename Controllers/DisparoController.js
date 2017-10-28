'use strict'

const Disparo = require ('../Models/Disparo')

function getDisparos (req, res) {
  Disparo.find({}, (err, disparos) => {
    if(err) return res.status(500).send({message: `Error while processing request`})
    if(!disparos) return res.status(404).send({message: `No shots found`})

    res.status(200).send({disparos})
  })
}
function getDisparo (req,res){
  Disparo.find({idEmisor: req.query.idEmisor},(err, disparo)=> {
    if(err) return res.status(500).send({message: `Error while processing request`})
    if(!disparo) return res.status(404).send({message: `No shots found`})
    res.status(200).send({disparo})
  })
}
function createDisparo (req, res) {
  let disparo = new Disparo ()
  disparo.idEmisor=req.body.idEmisor;
  disparo.idReceptor=req.body.idReceptor;
  disparo.save(function (err, userSaved) {
    if(err) res.status(500).send({message: `Error while processing request: ${err}`});
    else{
      res.status(200).send({message: `Shot created`})
    }
  })
}
module.exports = {
  getDisparos,
  getDisparo,
  createDisparo
}
