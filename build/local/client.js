import 'eventsource-polyfill'
import hotClient from 'webpack-hot-middleware/client?noInfo=true&reload=true'

hotClient.subscribe()
