import bunyan from 'bunyan'
import bformat from 'bunyan-format'
const formatOut = bformat({ outputMode: 'short' })

// https://www.npmjs.com/package/ics

const log = bunyan.createLogger({
  name: 'ICS',
  stream: formatOut
})

export default log