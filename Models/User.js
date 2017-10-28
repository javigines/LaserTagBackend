'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  idUser: { type: Schema.Types.ObjectId, ref: 'IdUser' },
  lp: Number,
  nickName: String,
  point: Number,
  IdG: Number
});

module.exports = mongoose.model('User', UserSchema)
