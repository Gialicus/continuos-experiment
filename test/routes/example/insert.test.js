'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('insert is loaded', async (t) => {
  const app = build(t)
  const res = await app.inject({
    url: '/example/insert'
  })
  t.type(res.payload, 'string')
})

