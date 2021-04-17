'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
const S = require('fluent-json-schema')
const seed = require('./script/sql-seed')

module.exports = async function (fastify, opts) {
  // Place here your custom code!
  fastify.register(require('fastify-env'), {
    schema: S.object()
      .prop('NODE_ENV', S.string().required())
      .prop('MONGO_URL',S.string().required())
      .prop('POSTGRES_URL',S.string().required())
      .prop('SECRET',S.string().required())
      .valueOf()
  })
  if(process.env.NODE_ENV !== 'production') {
    seed(10)
  }
  // Do not touch the following lines
  
  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })

}
