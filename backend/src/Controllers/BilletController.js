
const User = require("../Models/User")
const Billet = require("../Models/Billet")

module.exports = {

    async createBillet(req, res) {

        const { bankName, barCode, identify, payer, recipient, price, taxa, expDate, status, email, today, placeName, totalValue } = req.query

        try{

            const user = await User.findAll({
                where: {
                    email
                }
            })

            if(user[0]){

                const billet = await Billet.create({
                    bankName, 
                    barCode,
                    identify,
                    payer,
                    recipient,
                    price,
                    taxa,
                    expDate,
                    status,
                    today,
                    placeName,
                    totalValue
                })

                return res.json({ message: "Novo boleto cadastrado" })
            }else{
                return res.json({ err: "usuário não existe" })
            }

        }catch(err){
            return res.json(err)
        }

    },

    async catchBillets(req, res) {

        const { placeName } = req.query

        const billets = await Billet.findAll({
            where: {
                placeName
            }
        })

        return res.json(billets)

    } 

}