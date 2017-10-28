'use strict'

const Match = require ('../Models/Match')


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
  match.time = req.body.time
  match.type = req.body.type
  match.players = req.body.players

  match.save(function (err, matchSaved) {
    if(err) res.status(500).send({message: `Error while processing request: ${err}`});
    else{
      res.status(200).send({message: `Match created`})
    }
  })
}


function getMatchType (req, res){

}

module.exports = {
  getMatchs,
  getMatch,
  createMatch
}
