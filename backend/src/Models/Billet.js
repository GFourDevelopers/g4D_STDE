
const db = require("../connection/connection")

const Billet = db.sequelize.define("billets", {

    bankName: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    barCode: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    identify: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    payer: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    recipient: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    price: {
        type: db.Sequelize.FLOAT,
        allowNull: false
    },

    taxa: {
        type: db.Sequelize.FLOAT,
        defaultValue:0
    },

    expDate: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    status: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    today: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    placeName: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    totalValue: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})


//Billet.sync({ force: true })

module.exports = Billet