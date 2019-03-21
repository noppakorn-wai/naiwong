import { router, get } from 'microrouter'
import next from 'next'
import conf from './next.config'

const dev = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test'

const app = next({
  conf,
  dev,
  dir: __dirname,
})

if (dev) app.prepare()

export default router(
  get('/', (req, res) => app.render(req, res, '/home', req.query)),
  get('/*', app.getRequestHandler()),
)
