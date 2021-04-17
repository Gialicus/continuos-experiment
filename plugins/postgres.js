'use strict'
const fp = require("fastify-plugin");

module.exports = fp(async function(fastify,opts) {
    fastify.register(require('fastify-postgres'), {
        connectionString: fastify.config.POSTGRES_URL || 'postgres://postgres@postgres/postgres'
      })
      
})