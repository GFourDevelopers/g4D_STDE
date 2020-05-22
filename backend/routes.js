
const express = require("express")
const routes = express.Router()
const userController = require("./src/Controllers/UserController")
const BilletController = require("./src/Controllers/BilletController")

//rotas referentes aos usuários

//Cadastro de um novo usuário
routes.post("/Store", userController.Store)

//Loin de usuários.
routes.get("/Find", userController.Find)


//rotas relacionadas aos boletos.
routes.post("/cadBillet", BilletController.createBillet)

routes.get("/catchBillet", BilletController.catchBillets)


module.exports = routes