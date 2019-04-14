import express from 'express'
import bodyParser from 'body-parser'

import log from '../log'
import { getEvents } from './getEvents'

export default function initApp() {
  const app = express()

  getEvents()
    .then(events => {
      // perform magic with ICS feed here
      log.info({ events })
    })

  app.use(bodyParser.json())

  const PORT = 9099 || process.env.PORT
  app.listen(PORT, () => log.info(`Data provided on http://localhost:${PORT}`))
}
