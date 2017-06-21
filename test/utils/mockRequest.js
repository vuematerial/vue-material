import Vue from 'vue'
import { fakeServer } from 'sinon'

export default ({ method, url, status, headers, content }) => {
  const server = fakeServer.create()

  server.respondWith(method || 'GET', url, [status || 200, headers, content])

  return () => {
    server.respond()
    server.restore()

    return Vue.nextTick().then(() => server)
  }
}
