
const db = require("../connection/connection")

const User = db.sequelize.define("users", {
    name: {
        type: db.Sequelize.STRING
    },

    email: {
        type: db.Sequelize.STRING
    },

    password: {
        type: db.Sequelize.STRING
    }
})

//User.sync({ force: true })

module.exports = User