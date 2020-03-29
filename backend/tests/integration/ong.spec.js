const request = require('supertest')
const app = require('../../src/app')
const db_connection = require('../../src/database/connection')

describe('ONG', () => {
    // Limpa o banco e executa todas as migrations antes de cada teste
    beforeEach(async () => {
        await db_connection.migrate.rollback()
        await db_connection.migrate.latest()
    })

    afterAll(async () => {
        await db_connection.destroy()
    })
    
    it('should be able to create a new ONG', async () => {
        const res = await request(app)
            .post('/ongs')
            .send({
                name: "APAD",
                email: "apad@gmail.com",
                whatsapp: "79988412035",
                city: "Aracaju",
                uf: "SE"
            })

        expect(res.body).toHaveProperty('id')
        expect(res.body.id).toHaveLength(8)
    })
})