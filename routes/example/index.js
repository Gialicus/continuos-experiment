'use strict'

module.exports = async function (fastify, opts) {
  fastify.register(require('../../services/nosql-sample-service.js'))
  fastify.register(require('../../services/sql-sample-service.js'))
  fastify.get('/insert', async function (request, reply) {
    try {
      const result = await fastify.insertRecord({
        type: 'test',
        description: 'sample description'
      })
      return result
    } catch (error) {
      throw error
    }
  })
  fastify.get('/select', async function (request, reply) {
    try {
      const result = await fastify.selectRecord({type: 'test'})
      return result
    } catch (error) {
      throw error
    }
  })
  fastify.get('/selectsql/:id', async function (request, reply) {
    try {
      const result = await fastify.selectROW({id: request.params.id})
      return result
    } catch (error) {
      throw error
    }
  })
  fastify.get('/insertsql', async function (request, reply) {
    try {
      const result = await fastify.insertROW(null)
      return result
    } catch (error) {
      throw error
    }
  })
}
