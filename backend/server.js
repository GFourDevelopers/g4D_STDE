const express = require("express")

const app = express()
const bodyParser = require("body-parser")
const routes = require("./routes")

app.use(function(req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routes)

app.listen(3000, () => {
    console.log("Rodando em http://localhost:3000")
})
