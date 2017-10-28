'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const MatchSchema = new Schema({
  IdMatch: { type: Schema.Types.ObjectId, ref: 'IdMatch' },
  time: Date,
  Players: [String]
});

module.exports = mongoose.model('Match', MatchSchema)
