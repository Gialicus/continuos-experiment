'use strict'
const { default: fp } = require("fastify-plugin");

module.exports = fp(async function (fastify, opts) {
    async function selectSQL(queryString,params) {
        return new Promise((resolve,reject) => {
            fastify.pg.connect(onConnect)
            function onConnect(err, client, release) {
                if (err) return reject(err)
                client.query(
                    queryString, [params.id],
                    function onResult(err, result) {
                        release()
                        resolve(err || result)
                    }
                )
            }
        })
    }
    fastify.decorate('selectSQL', selectSQL)
})