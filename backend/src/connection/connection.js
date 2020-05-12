
const Sequelize = require("sequelize")

const sequelize = new Sequelize("techbank", "root", "", {
    host: 3306,
    dialect:"mysql"
})

module.exports = {
    Sequelize,
    sequelize
}