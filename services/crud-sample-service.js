const { default: fp } = require("fastify-plugin");

module.exports = fp(async (fastify,opts) => {
    fastify.register(require('./nosql-dao/insert-one.js'), {
        dbName: 'myDb',
        collection: 'test'
    })
    fastify.register(require('./nosql-dao/select-one.js'), {
        dbName: 'myDb',
        collection: 'test'
    })
    const insertRecord = async (data) => {
        try {
            const result = await fastify.insertOne(data)
            return result
        } catch (error) {
            throw error
        }
    }
    const selectRecord = async (data) => {
        try {
           const result = await fastify.selectOne(data)
           return result
        } catch (error) {
            throw error
        }
    }
    fastify.decorate('insertRecord',insertRecord)
    fastify.decorate('selectRecord',selectRecord)
})