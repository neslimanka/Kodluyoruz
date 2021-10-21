var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req: any, res: any, next: () => void) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req: any, res: { send: (arg0: string) => void }) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req: any, res: { send: (arg0: string) => void }) {
  res.send('About birds')
})

module.exports = router