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
function deleteGun (req, res) {
  let idGun = req.body.idGun

  if(idGun == undefined)
    return res.status(404).send({message: 'Error gun undefined'})

  Gun.findOne({idGun: idGun}, (err, users) => {
    if(err) return res.status (500).send({message:`Error while processing request`})
    if(!gun) return res.status(404).send({message: 'Gun not in database'})

    Gun.remove({idGun: idGun}).exec((err, gunDeleted) => {
      if(err) return res.status(500).send({message: `Error while processing request: ${err}`})
      if(!gunDeleted) return res.status(404).send({message: ''})

      res.status(200).send({message: `gun deleted`})
    })
  })
}
function deleteAllGun (req, res) {

  Gun.find({}, (err, guns) => {
    if(err) return res.status (500).send({message:`Error while processing request`})
    if(!guns) return res.status(404).send({message: 'Gun not in database'})

    Gun.remove(guns).exec((err, gunDeleted) => {
      if(err) return res.status(500).send({message: `Error while processing request: ${err}`})
      if(!gunDeleted) return res.status(404).send({message: 'Not gun in database'})

      res.status(200).send({message: `All user deleted`})
    })
  })
}


module.exports = {
  getGuns,
  getGun,
  createGun,
  deleteGun,
  deleteAllGun
}
