'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  lp: Number,
  nickname: String,
  point: Number
});

module.exports = mongoose.model('User', UserSchema)
