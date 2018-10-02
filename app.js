const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()
const port = 9000

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/ping', function (req, res) { res.send({ message: 'pong!' }) })
// app.use('/report', require('./route/report'))

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`)
})