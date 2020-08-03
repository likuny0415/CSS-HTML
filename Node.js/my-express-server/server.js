const express = require('express')

const app = express();

app.get('/', function(req, res) {
  res.send('<h1> Express<h1>')
})

app.get('/about', function(req, res) {
  res.send('<h1>Who I a112311231222312m<h1>')
})

app.listen(3000, function() {
  console.log('Server 3000 has started')
})
