const { default: fp } = require("fastify-plugin");
const SELECT = 'SELECT id, username FROM users WHERE id=$1'
const INSERT = 'INSERT INTO users (id,username) VALUES ($1,$2)'

module.exports = fp(async (fastify,opts) => {
    fastify.register(require('./sql-dao/select-query.js'))
    fastify.register(require('./sql-dao/insert-query.js'))
    const selectROW = async (params) => {
        try {
           const result = await fastify.selectSQL(SELECT,{...params})
           return result
        } catch (error) {
            throw error
        }
    }
    const insertROW = async (data) => {
        try {
           const result = await fastify.insertSQL(INSERT,{id: 1000,username: 'giali'})
           return result
        } catch (error) {
            throw error
        }
    }
    fastify.decorate('selectROW',selectROW)
    fastify.decorate('insertROW',insertROW)
})