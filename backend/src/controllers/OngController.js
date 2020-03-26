const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body
        const id = crypto.randomBytes(4).toString('HEX') // Cria string aleatória para o id

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return res.json({ id })
    },

    async list(req, res) {
        const ongs = await connection('ongs').select('*')

        return res.json(ongs)
    }
}