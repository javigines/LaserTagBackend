'use strict'

const express = require ('express')
const mongoose = require ('mongoose')
const api = express()
const autoIncrement = rquire ('mongoose-auto-increment')
var connection  = mongoose.createConnection ('mongodb://localhost/laserTag')
autoIncrement.initialize (connection)

const UserSchema = Schema({
  idUser: { type: Schema.Types.ObectId, ref: 'IdUser' },
  lp: Number,
  nickName: String,
  point: Number,
  IdG: Number
});

UserSchema.plugin (autoIncrement.plugin, 'IdUser')
var IdUser = connection.model ('IdUser', UserSchema)
