const { default: fp } = require("fastify-plugin");

module.exports = fp(async function (fastify, opts) {
    if(!opts.dbName && !opts.collection) throw new Error(`dbName or collection cant be falsy`)
    const db = fastify.mongo.client.db(opts.dbName)
    // select
    async function selectOne(filter) {
        return new Promise((resolve, reject) => {
            db.collection(opts.collection, onCollection)
            function onCollection(err, col) {
                if (err) return reject(err)
                col.findOne(filter, (err, data) => {
                    if (err) return reject(err)
                    resolve(data)
                })
            }
        })
    }
    fastify.decorate('selectOne', selectOne)
})