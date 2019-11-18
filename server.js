'use strict'


require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT;

const server = express();

// server.use(cors());





server.get('/location', (request, response) => {
    const locationData = require('./data/geo.json');
    const location = new Location(locationData);
    response.status(200).json(location);
  });
  
  function Location( data ) {
      this.search_query = 'lynnwood';
      this.formatted_query = data.results[0].formatted_address;
      this.latitude = data.results[0].geometry.location.lat;
    this.longitude = data.results[0].geometry.location.lng;
}

server.get('/weather', weatherHanddler);

function weatherHanddler(req,res) {
    let weatherData = getWeather(req.query.data);
    res.status(200).json(weatherData);
}


function getWeather (city) {
    let data = require('./data/darksky.json');
    
    return data.daily.data.map( (day) => {
        return new Weather(day);
    })

 
  };
  
  function Weather( day ) {

      this.forecast = day.summary;
      this.time = new Date(day.time * 1000).toDateString();
          // this.latitude = data.latitude
          // this.longitude = data.longitude
          
          
        }
   
        
        server.listen(PORT, () => console.log(`App listening on ${PORT}`));
        