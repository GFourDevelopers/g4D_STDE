
const User = require("../Models/User")
const Billet = require("../Models/Billet")

module.exports = {

    async createBillet(req, res) {

        const { bankName, barCode, identify, payer, recipient, price, taxa, expDate, email, today, placeName, totalValue } = req.query

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
                    status: "A PAGAR",
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
                placeName,
                status: "A PAGAR"
            }
        })

        return res.json(billets)

    },

    async finalizeBillets(req, res) {

        const { id } = req.query

        const billet = await Billet.update({
            status: "PAGO"
        }, {
            where: {
                id
            }
        })

        return res.json(billet)

    },

    async deleteBillet(req, res){

        const { id } = req.query

        const billet = await Billet.destroy({
            where: {
                id
            }
        })

        return res.json(billet)

    }

}