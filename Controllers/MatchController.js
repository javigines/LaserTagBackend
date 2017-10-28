'use strict'

const Match = require ('../Models/Match')
const moment = require ("moment")
const User = require ("../Models/User")

function getMatchs (req, res) {
  Match.find({}, (err, idMatchs) => {
    if(err) return res.status(500).send({message: `Error while processing request`})
    if(!idMatchs) return res.status(404).send({message: `No match found`})

    res.status(200).send({ idMatchs })
  })
}


function getMatch (req, res){
  let idMatch = req.query.idMatch
  Match.find({_id: idMatch}, (err, match) => {
    if(err) return res.status (500).send({message:`Error while processing request`})
    if(!match) return res.status(404).send({message: `No match found`});

    res.status(200).send({match})
  })
}

function createMatch (req, res) {
  let match = new Match()
  let user = new User()
  match.time = moment().add(1.5, "minutes").unix()
  match.duracion = req.body.time
  // match.type = req.body.type
  match.teams = req.body.teams
  var users = []
  for (var i = 0; i < req.body.teams.length; i++) {
    users.push(req.body.teams[i].idUser)
  }
  User.update({_id: {$in: users}}, { lp: req.body.life }, {multi: true}, (err, users) => {

  })

  match.save(function (err, matchSaved) {
    if(err) return res.status(500).send({message: `Error while processing request: ${err}`});
    return res.status(200).send({message: `Match created`})

  })
}


function getMatchType (req, res){

}

module.exports = {
  getMatchs,
  getMatch,
  createMatch
}
