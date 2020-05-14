
const User = require("../Models/User")

module.exports = {

    async Store(req, res){

        const { name, email, password } = req.query

        let userData = await User.findAll({
            where: {
                email
            }
        })

        if(!userData[0]){
            userData = await User.create({
                name,
                email,
                password
            })
        }

        return res.json(userData)

    },

    async Find(req, res) {

        const { email, password } = req.query

        const userData = await User.findAll({
            where: {
                email,
                password
            }
        })

        return res.json(userData)

    }

}