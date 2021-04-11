const { default: fp } = require("fastify-plugin");

module.exports = fp(async function (fastify, opts) {
    const db = this.mongo.client.db('mydb')
    // insert
    async function insertOne(objToInsert) {
        return new Promise((resolve, reject) => {
            db.collection('users', onCollection)
            function onCollection(err, col) {
                if (err) return reject(err)
                col.insertOne(objToInsert, (err, data) => {
                    if (err) return reject(err)
                    resolve(data)
                })
            }
        })
    }
    fastify.decorate('insertOne', insertOne)
    // select
    async function selectOne(filter) {
        return new Promise((resolve, reject) => {
            db.collection('users', onCollection)
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
    // update
    async function updateOne(filter, objToUpdate) {
        return new Promise((resolve, reject) => {
            db.collection('users', onCollection)
            function onCollection(err, col) {
                if (err) return reject(err)
                col.findOne(filter, objToUpdate, (err, data) => {
                    if (err) return reject(err)
                    resolve(data)
                })
            }
        })
    }
    fastify.decorate('updateOne', updateOne)
    // delete
    async function deleteOne(filter) {
        return new Promise((resolve, reject) => {
            db.collection('users', onCollection)
            function onCollection(err, col) {
                if (err) return reject(err)
                col.findOne(filter, (err, data) => {
                    if (err) return reject(err)
                    resolve(data)
                })
            }
        })
    }
    fastify.decorate('deleteOne', deleteOne)
})