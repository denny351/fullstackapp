const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);

const { User } = require('./models/user');
const { Game } = require('./models/game');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running at ${port}`)
})
