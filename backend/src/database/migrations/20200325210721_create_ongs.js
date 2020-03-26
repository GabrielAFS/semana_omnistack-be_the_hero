
// Método responsável por criar as tabelas
exports.up = function(knex) {
    return knex.schema.createTable('ongs', (table) => {
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
    })
};

// Método responsável por desfazer alguns erros.
// Ex: truncate, drop table, etc.
exports.down = function(knex) {
    return knex.schema.dropTable('ongs')
};
