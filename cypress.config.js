const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  projectId: 'pymqwi',
  env: {
    adminUsername: process.env.ADMIN_USERNAME,
    adminPassword: process.env.ADMIN_PASSWORD,
    token: process.env.TOKEN_TEST,
  },
  e2e: {
    baseUrl: 'http://localhost:8081',
    supportFile: false,
  },
})
