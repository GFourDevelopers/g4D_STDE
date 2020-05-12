
const express = require("express")
const routes = express.Router()
const userController = require("./src/Controllers/UserController")

routes.post("/Store", userController.Store)

routes.get("/Find", userController.Find)

module.exports = routes