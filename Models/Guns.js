'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const GunSchema = new Schema({
  IdGun: Number,
  Damage: Number
});

module.exports = mongoose.model('Gun', GunSchema)
