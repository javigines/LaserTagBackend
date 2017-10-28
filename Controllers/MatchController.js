'use strict'

const Match = require ('../Models/Match')

/*
CODIGOS DE ERROR A APLICAR EN RES.STATUS:
500 - Internal Server Error, fallo del servidor, generalmente es que no se ha podido acceder a la BBDD por lo que sea.
404 - Not found, esto quiere decir que no se encuentra la información (el usuario que se busca no existe).
400 - Forbidden, no se disponen de credenciales para acceder a la info, o ésta es privada.
200 - OK, se devuelve la info solicitada junto con este código.

Hay muchos más, pero no los necesitamos en este caso concreto. Todos los métodos deben tratar estas excepciones.

(Es el único y último comentario que os pongo en español, pero quería asegurarme de que lo entendiérais).
*/
function getMatchs (req, res) {
  Match.find({}, (err, IdMatchs) => {
    if(err) return res.status(500).send({message: `Error while processing request`})
    if(!IdMatchs) return res.status(404).send({message: `No match found`})

    res.status(200).send({ IdMatchs })
  })
}


function getMatch (req, res){
  let IdMatch = req.query.IdMatch
  console.log(IdMatch)
  Match.find({_id: IdMatch}, (err, match) => {
    if(err) return res.status (500).send({message:`Error while processing request`})
    if(!match) return res.status(404).send({message: `No match found`});
    console.log(match)
    res.status(200).send({match})
  })
}

function createMatch (req, res) {
  let match = new Match()
  match.time = req.body.time
  match.Type = req.body.Type
  console.log(req.body.Players)

  match.Players = req.body.Players
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
