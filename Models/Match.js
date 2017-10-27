'use strict'

const express = require ('express')
const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const api = express()
const autoIncrement = require ('mongoose-auto-increment')
var connection  = mongoose.createConnection ('mongodb://localhost/laserTag')
autoIncrement.initialize (connection)

const MatchSchema = new Schema({
  IdMatch: { type: Schema.Types.ObjectId, ref: 'IdMatch' },
  time: Date,
  Players: [String]
});

MatchSchema.plugin (autoIncrement.plugin, 'IdMatch')
var IdMatch = connection.model ('IdMatch', MatchSchema)
