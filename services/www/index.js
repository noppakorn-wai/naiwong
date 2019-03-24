import { router, get } from 'microrouter'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test'

const dir = (() => {
  if (dev) return './services/www'
  const { existsSync } = require('fs') // eslint-disable-line global-require
  if (existsSync('./.build')) return './.build'
  return '.'
})()

const app = next({
  dev,
  dir,
})

if (dev) app.prepare()

export default router(
  get('/', (req, res) => app.render(req, res, '/home', req.query)),
  get('/*', app.getRequestHandler()),
)
