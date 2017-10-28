'use strict'

const Shot = require ('../Models/Shot')

function getShots (req, res) {
  Shot.find({}, (err, shots) => {
    if(err) return res.status(500).send({message: `Error while processing request`})
    if(!shots) return res.status(404).send({message: `No shots found`})

    res.status(200).send({shots})
  })
}
function getShot (req,res){
  Shot.find({idEmisor: req.query.idEmisor},(err, shot)=> {
    if(err) return res.status(500).send({message: `Error while processing request`})
    if(!shot) return res.status(404).send({message: `No shots found`})
    res.status(200).send({shot})
  })
}
function createShot (req, res) {
  let shot = new Shot ()
  shot.idEmisor=req.body.idEmisor;
  shot.idReceptor=req.body.idReceptor;
  shot.save(function (err, userSaved) {
    if(err) res.status(500).send({message: `Error while processing request: ${err}`});
    else{
      res.status(200).send({message: `Shot created`})
    }
  })
}
module.exports = {
  getShots,
  getShot,
  createShot
}
