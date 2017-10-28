'use strict'

const express = require ('express')
const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const api = express()

const GunSchema = new Schema({
  IdGun: Number,
  Damage: Number
});

module.exports = mongoose.model('Gun', GunSchema)
