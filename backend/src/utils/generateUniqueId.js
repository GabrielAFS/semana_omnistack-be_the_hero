const crypto = require('crypto')

module.exports = {
    // Cria string aleatória para o id
    generateUniqueId() {
        return crypto.randomBytes(4).toString('HEX')
    }
}