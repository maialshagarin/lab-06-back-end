'use strict'
require('dotenv').config();
const express = require('express');

const cors = require('cors');

const PORT = process.env.PORT;

const server = express();
console.log(server)
console.log(server)

server.use(cors());

server.get('/',(request,Response) =>{
   Response.status(200).send('great  job  ');
})

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
 
server.listen(PORT, () => console.log(`App listening on ${PORT}`));