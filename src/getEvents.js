import axios from 'axios'
import log from '../log'
import { createEvents } from 'ics'
import moment from 'moment'

const APIURL = 'https://indicium.hu/json/events'

const stripHTMLFromString = str => str.replace(/(<([^>]+)>)/ig,'').replace(/\n|\r/g, '')

function parseIndiciumAPIEventObject(eventObj) {
  const { attributes: {
    title,
    contentblocks,
    start,
    end
  }} = eventObj

  const finalEventObj = {
    title: title,
    description: stripHTMLFromString(contentblocks[0].content),
    start: moment(start).format('YYYY-M-D-H-m').split('-'),
    end: moment(end).format('YYYY-M-D-H-m').split('-'),
    url: 'https://indicium.hu',
    organizer: { name: 'Indicium', email: 'contact@indicium.hu' },
  }

  return finalEventObj
}

export function getEvents() {
  return axios.get(APIURL)
    .then(response => {
      const eventObjects = response.data.data
      const finalEventObjects = eventObjects.map(evt => parseIndiciumAPIEventObject(evt))

      return createEvents(finalEventObjects, (error, value) => {
        if(error) log.error({ error })

        return value
      })
    })
    .catch(err => log.error({ err}))
}
