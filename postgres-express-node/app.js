const express    = require('express');
const logger     = require('morgan');
const bodyParser = require('body-parser');
const todoRoutes = require('./server/routes/todoRoutes');
const addLogs    = require('./server/middlewares/test');
const { logTodo } = require('./server/console/commands/todo');
const cron       = require('./server/console/commands/todo')();

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(addLogs.myLogger());

app.use('/api/v1/todo', todoRoutes);
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning.',
}));

module.exports = app;