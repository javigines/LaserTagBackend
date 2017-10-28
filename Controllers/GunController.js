'use strict'

const Gun = require ('../Models/Guns')


function getGuns (req, res) {
  Gun.find({}, (err, idGuns) => {
    if(err) return res.status(500).send({message: `Error while processing request`})
    if(!idGuns) return res.status(404).send({message: `No guns found`})

    res.status(200).send({ idGuns })
  })
}
function getGun(req, res){
  let gun = req.query.idGun
  Gun.find({idGun : gun}, (err, gun) => {
    if(err) return res.status (500).send({message:`Error while processing request`})
    if(!gun) return res.status(404).send({message: `No gun found`});
    res.status(200).send({gun})
  })
}
function createGun (req, res) {
  let gun = new Gun ()
  gun.idGun =req.body.idGun;
  gun.damage =req.body.damage;

  gun.save(function (err, gunSaved) {
    if(err) res.status(500).send({message: `Error while processing request: ${err}`});
    else{
      res.status(200).send({message: `Gun created`})
    }
  })
}


module.exports = {
  getGuns,
  getGun,
  createGun
}
