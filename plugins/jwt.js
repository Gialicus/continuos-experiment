'use strict'
const fp = require("fastify-plugin");

module.exports = fp(async function(fastify,opts) {
    fastify.register(require('fastify-jwt'), {
        secret: fastify.config.SECRET
      })
})