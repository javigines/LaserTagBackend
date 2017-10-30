'use strict'

const express = require ('express')
const api = express.Router()

const UserController = require ('../Controllers/UserController')
const MatchController = require ('../Controllers/MatchController')
const GunsController = require ('../Controllers/GunController')
const ShotController = require ('../Controllers/ShotController')

//DEFINED ROUTES TO API METHODS

//rutina de usuarios
api.get('/getUsers', UserController.getUsers)
api.get('/getUser', UserController.getUser)
api.post('/createUser', UserController.createUser)
api.post('/deleteUser', UserController.deleteUser)
api.get('/deleteAllUser', UserController.deleteAllUser)

//rutina de partida
api.get('/getMatchs', MatchController.getMatchs)
api.get('/getMatch', MatchController.getMatch)
api.post('/createMatch', MatchController.createMatch)
api.post('/deleteMatch', MatchController.deleteMatch)
api.get('/deleteAllMatch', MatchController.deleteAllMatch)


//rutina de pistolas
api.get('/getGuns', GunsController.getGuns)
api.get('/getGun', GunsController.getGun)
api.post('/createGun', GunsController.createGun)
api.post('/deleteGun', GunsController.deleteGun)
api.get('/deleteAllGun', GunsController.deleteAllGun)

//rutina de disparos
api.get('/getShots', ShotController.getShots)
api.get('/getShot', ShotController.getShot)
api.post('/createShot', ShotController.createShot)
api.post('/deleteShot', ShotController.deleteShot)
api.get('/deleteAllShot', ShotController.deleteAllShot)

module.exports = api
