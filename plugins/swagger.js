const fp = require('fastify-plugin')

module.exports = fp(async function(fastify,opts) {
    fastify.register(require('fastify-swagger'), {
        routePrefix: '/documentation',
        swagger: {
          info: {
            title: 'Test swagger',
            description: 'testing the fastify swagger api',
            version: '0.1.0'
          },
          externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
          },
          host: 'localhost',
          schemes: ['http'],
          consumes: ['application/json'],
          produces: ['application/json'],
          tags: [
            { name: 'user', description: 'User related end-points' },
            { name: 'code', description: 'Code related end-points' }
          ],
          securityDefinitions: {
            apiKey: {
              type: 'apiKey',
              name: 'apiKey',
              in: 'header'
            }
          }
        },
        uiConfig: {
          docExpansion: 'full',
          deepLinking: false
        },
        exposeRoute: true
      })
})