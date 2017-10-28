'use strict'


const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const DisparoSchema = new Schema({
  idEmisor: String,
  idReceptor: String
});

module.exports= mongoose.model('Disparo', DisparoSchema)
