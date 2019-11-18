'use strict'


require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT;

const server = express();

console.log(server)
