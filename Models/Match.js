'use strict'

const express = require ('express')
const mongoose = require ('mongoose')
const api = express()
const autoIncrement = rquire ('mongoose-auto-increment')
var connection  = mongoose.createConnection ('mongodb://localhost/laserTag')
autoIncrement.initialize (connection)

const MatchSchema = Schema({
  IdMatch: { type: Schema.Types.ObectId, ref: 'IdMatch' },
  time: Date,
  Players: [String]
});

MAtchSchema.plugin (autoIncrement.plugin, 'IdMatch')
var IdMatch = connection.model ('IdMatch', MatchSchema)
