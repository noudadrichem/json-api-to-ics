import express, { Router } from 'express'

import log from '../log'
import { getEvents } from './getEvents'

export default function initApp() {
  const app = express()
  const router = Router()

  router.get('/v1/ics', (req, res) => {
    getEvents(req)
      .then(events => {
        res.send(events)
      })
  })

  app.use(router)

  const PORT = 9099 || process.env.PORT
  app.listen(PORT, () => log.info(`Data provided on http://localhost:${PORT}`))
}
