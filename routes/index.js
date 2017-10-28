'use strict'

const express = require ('express')
const api = express.Router()

const UserController = require ('../Controllers/UserController')
const MatchController = require ('../Controllers/MatchController')
const GunsController = require ('../Controllers/GunController')
const DisparoController = require ('../Controllers/DisparoController')

//DEFINED ROUTES TO API METHODS
api.get('/getUsers', UserController.getUsers)
api.get('/getUser', UserController.getUser)
api.post('/createUser', UserController.createUser)
api.get('/getMatch', MatchController.getMatch)
api.get('/getGuns', GunsController.getGuns)
api.get('/getDisparo', DisparoController.getDisparo)

module.exports = api
