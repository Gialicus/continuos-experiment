'use strict'

// This file contains code that we reuse
// between our tests.

const Fastify = require('fastify')
const fp = require('fastify-plugin')
const App = require('../app')

const clean = require('mongo-clean')
const { MongoClient } = require('mongodb')
const { beforeEach, tearDown, test } = require('tap')
const mongoUrl = 'mongodb://localhost:27017'
const postgresUrl = 'postgres://postgres@localhost/postgres'
const database = 'tests'

let client

process.env.NODE_ENV = 'test'
process.env.MONGO_URL = mongoUrl
process.env.POSTGRES_URL = postgresUrl
process.env.SECRET = 'supersecretkeymaybe'

beforeEach(async function () {
  if (!client) {
    client = await MongoClient.connect(mongoUrl, {
      w: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
  await clean(client.db(database))
})

tearDown(async function () {
  if (client) {
    await client.close()
    client = null
  }
})

// Fill in this config with all the configurations
// needed for testing the application
function config () {
  return {
    auth: {
      secret: 'averyverylongsecret'
    },
    mongodb: {
      client,
      database
    }
  }
}

// automatically build and tear down our instance
function build (t) {
  const app = Fastify()

  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  app.register(fp(App), config())

  // tear down our app after we are done
  t.tearDown(app.close.bind(app))

  return app
}

module.exports = {
  config,
  build
}