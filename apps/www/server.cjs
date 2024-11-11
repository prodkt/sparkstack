const path = require('path')
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const app = next({ dev: false, conf: { outputFileTracing: true } })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(process.env.PORT || 3000, () => {
    console.log('> Ready on http://localhost:' + (process.env.PORT || 3000))
  })
})
