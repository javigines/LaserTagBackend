'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const MatchSchema = new Schema({
  startTime: Number,
  finishTime: Number,
  teams: [{}],
  type: String
});

module.exports = mongoose.model('Match', MatchSchema)
