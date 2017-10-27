'use strict'

const express = require ('express')
const api = express.Router()

const UserController = require ('../Controllers/UserController')
const MatchController = require ('../Controllers/MatchController')
const GunsController = require ('../Controllers/GunsController')

//DEFINED ROUTES TO API METHODS
api.get('/getUsers', UserController.getUsers)
api.get('/getMatch', MatchController.getMatch)
api.get('/getGuns', GunsController.getGuns)
