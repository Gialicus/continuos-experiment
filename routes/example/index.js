'use strict'

module.exports = async function (fastify, opts) {
  fastify.register(require('../../services/crud-sample-service.js'))
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
}
