const { flow } = require('lodash')
const withOffline = require('next-offline')

module.exports = flow([withOffline])({
  // next.js config
  useFileSystemPublicRoutes: false,
})
