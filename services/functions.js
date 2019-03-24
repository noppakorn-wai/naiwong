import { run } from 'micro'
import * as functions from 'firebase-functions'
import apiHandler from './api'
import wwwHandler from './www'

export const api = functions.https.onRequest((req, res) => run(req, res, apiHandler))
export const www = functions.https.onRequest((req, res) => run(req, res, wwwHandler))
