'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('example is loaded', async (t) => {
  const app = build(t)
  const res = await app.inject({
    url: '/example/insertSQL'
  })
  t.type(res.payload, 'string')
})

