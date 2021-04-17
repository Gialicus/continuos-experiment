'use strict'

module.exports = async function (fastify, opts) {
  fastify.addHook('onRequest',async (request,reply) => {
    try {
        await request.jwtVerify()
    } catch (error) {
        reply.send(error)
    }
  })
  fastify.get('/', async function (request, reply) {
    return {
        message: 'works',
        type: 'sometype'
    }
  })
}