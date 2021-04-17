const { Client } = require('pg')
const faker = require('faker')
const client = new Client('postgres://postgres@postgres/postgres')
async function seed(numberOfRows) {
    try {
        await client.connect()
        const deletion = await client.query('DROP TABLE IF EXISTS users')
        const creation = await client.query('CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR)')
        for (let i=0; i <= numberOfRows;i++) {
            await client.query('INSERT INTO users (id,username) VALUES ($1,$2)',[i,'test' + i])
        }
        await client.end()
    } catch (error) {
        console.log(error)
    }
}

module.exports = seed
