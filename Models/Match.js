'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const MatchSchema = new Schema({
  time: Date,
  Players: [{}],
  Type: String
});

module.exports = mongoose.model('Match', MatchSchema)
