'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('example is loaded', async (t) => {
  const app = build(t)

  const res1 = await app.inject({
    url: '/example/insert'
  })
  t.type(res1.payload, 'string')
  const res2 = await app.inject({
    url: '/example/select'
  })
  t.type(res2.payload, 'string')
})

