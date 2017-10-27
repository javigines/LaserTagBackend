'use strict'

const express = require ('express')
const mongoose = require ('mongoose')
const api = express()

const GunSchema = Schema({
  IdGun: Number,
  Damage: Number
});
