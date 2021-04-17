// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
'use strict'
const { default: fp } = require("fastify-plugin");

module.exports = fp(async function (fastify, opts) {
    async function insertSQL(queryString,params) {
        return new Promise((resolve,reject) => {
            fastify.pg.connect(onConnect)
            function onConnect(err, client, release) {
                if (err) return reject(err)
                client.query(
                    queryString, [...Object.values(params)],
                    function onResult(err, result) {
                        release()
                        resolve(err || result)
                    }
                )
            }
        })
    }
    fastify.decorate('insertSQL', insertSQL)
})