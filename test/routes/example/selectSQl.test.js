'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('example is loaded', async (t) => {
  const app = build(t)
  const res = await app.inject({
    url: '/example/selectSQL/0'
  })
  t.type(res.payload, 'string')
})

