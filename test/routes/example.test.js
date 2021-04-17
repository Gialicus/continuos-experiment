'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('example is loaded', async (t) => {
  const app = build(t)
  const res1 = await app.inject({
    url: '/example/insert'
  })
  const res2 = await app.inject({
    url: '/example/select'
  })
  const res3 = await app.inject({
    url: '/example/insertSQL'
  })
  const res4 = await app.inject({
    url: '/example/selectSQL/0'
  })
  t.type(res1.payload, 'string')
  t.type(res2.payload, 'string')
  t.type(res3.payload, 'string')
  t.type(res4.payload, 'string')
})

