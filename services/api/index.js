import { run } from 'micro'
import { router } from 'microrouter'
import places from './controllers/places'

export default (req, res) => run(req, res, router(places))
