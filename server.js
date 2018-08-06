const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')

const app = express();
const router = express.Router();
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
mongoose.connect('mongodb://fran:fran182@ds020228.mlab.com:20228/movie_rating_app', { useNewUrlParser: true }, () => {
  console.log('Connection ok');
})
.catch(err => {
  console.log('Connection error', err);
  process.exit(1)
})

// Include controllers
fs.readdirSync("controllers").forEach(function (file) {
  if(file.substr(-3) == ".js") {
    const route = require("./controllers/" + file)
    route.controller(app)
  }
})

router.get('/', (req, res) => {
  res.json({ message: 'API initilized'})
})

const port = process.env.API_PORT || 8082;
app.use('/', router)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
