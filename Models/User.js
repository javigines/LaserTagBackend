'use strict'

const express = require ('express')
const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const api = express()
//const autoIncrement = require ('mongoose-auto-increment')
//var connection  = mongoose.createConnection ('mongodb://localhost/laserTag')
//autoIncrement.initialize (connection)

const UserSchema = new Schema({
  idUser: { type: Schema.Types.ObjectId, ref: 'IdUser' },
  lp: Number,
  nickName: String,
  point: Number,
  IdG: Number
});

/*UserSchema.plugin (autoIncrement.plugin, 'IdUser')
var IdUser = connection.model ('IdUser', UserSchema)
*/
module.exports = mongoose.model('User', UserSchema)
