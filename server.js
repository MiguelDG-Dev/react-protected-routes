const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const passport = require('passport');

const authRoute = require('./routes/authRoutes');

const { MONGODB_URI } = require('./config/config');

require('dotenv').config();

// DEV DEPENDENCIES
const chalk = require('chalk');

const app = express();

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(5000, () => {
      console.log(chalk.black.bgGreen('Up and running...'));
    });
  })
  .catch((err) => {
    console.log(chalk.black.bgRed(err.message));
  });

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: 'hey!whatsup?'
  })
);

app.use(helmet());
app.use(morgan('common'));
app.use(cors());

app.use('/auth', authRoute);

app.get('/', (req, res) => {
  res.json({
    message: 'HOME PAGE'
  });
});
