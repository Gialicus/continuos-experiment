'use strict'

const { test } = require('tap')
const { build } = require('../../helper')

test('protected is loaded', async (t) => {
  const app = build(t)
  const res = await app.inject({
    url: '/example/protected'
  })
  t.equal(res.statusCode, 401)
})
