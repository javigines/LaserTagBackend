'use strict'

const Gun = require ('../Models/Guns')

/*
CODIGOS DE ERROR A APLICAR EN RES.STATUS:
500 - Internal Server Error, fallo del servidor, generalmente es que no se ha podido acceder a la BBDD por lo que sea.
404 - Not found, esto quiere decir que no se encuentra la información (el usuario que se busca no existe).
400 - Forbidden, no se disponen de credenciales para acceder a la info, o ésta es privada.
200 - OK, se devuelve la info solicitada junto con este código.

Hay muchos más, pero no los necesitamos en este caso concreto. Todos los métodos deben tratar estas excepciones.

(Es el único y último comentario que os pongo en español, pero quería asegurarme de que lo entendiérais).
*/
function getGuns (req, res) {
  Gun.find({}, (err, idGuns) => {
    if(err) return res.status(500).send({message: `Error while processing request`})
    if(!idGuns) return res.status(404).send({message: `No guns found`})

    res.status(200).send({ idGuns })
  })
}


module.exports = {
  getGuns
}
