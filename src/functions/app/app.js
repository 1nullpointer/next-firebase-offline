import * as functions from "firebase-functions"
import next from "next"
import {parse} from "url"
import {join} from "path"

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev, conf: { distDir: "next" } })
const handle = app.getRequestHandler()

const nextApp = functions.https.onRequest((request, response) => {
  console.log("File: " + request.originalUrl)
  console.log("dev:", dev)
  // log the page.js file or resource being requested

  const parsedUrl = parse(request.url, true)
  const {pathname} = parsedUrl;

  console.log("pathname:", pathname)
  console.log("__dirname:", __dirname)

  if (pathname === '/service-worker.js') {
    const filePath = join(__dirname, '/dist/functions/.next', pathname)

    console.log("filePath: ../next ", filePath)

    return app.serveStatic(request, response, '../next/service-worker.js')
  } 


  return app.prepare().then(() => handle(request, response))
})

export { nextApp }
