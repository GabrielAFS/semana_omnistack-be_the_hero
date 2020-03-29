const knex = require('knex')
const config = require('../../knexfile')

const env_config = process.env.NODE_ENV === 'test' ? config.test : config.development

const connection = knex(env_config)

module.exports = connection