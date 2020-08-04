const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({
  entended: true
}))

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.post('/', function(req, res) {
  const query = req.body.cityName
  const apiKey = '688190e05271b83fe613635bdedcb093'
  const units = 'metric'

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + apiKey + '&units=' + units
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on('data', function(data) {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description
      const icontrail = weatherData.weather[0].icon
      const iconUrl = 'http://openweathermap.org/img/wn/' + icontrail + '@2x.png'
      res.write("<h1>Today's temperature at " + query + "is " + temp + " degree Celcius</h1>")
      res.write("<h1>The weather is currently " + weatherDescription)
      res.write("<img src=" + iconUrl + ">")
      res.send()

    })
  })
})


app.listen(3000, function() {
  console.log('Server is running on port 3000.')
})
