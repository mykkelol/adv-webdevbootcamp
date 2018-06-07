// standard procedure is to create a root route in index.js and have another directory dedicated to the models/compiled 
// schemas. As such, the root file will require the model directory. This is why we name the underlying file index.js 
// because it will automitcally look for index.js first

// index.js will then require all the models/compiled schemas as shown below

var mongoose = require('mongoose');
mongoose.set('debug', true); // when things are sent to the db and failing, it will inform us instead of silently failing
mongoose.connect('mongodb://localhost/todo-api'); // if you don't already have the db, it will create tod-api db and connect with it in subsequent events
mongoose.Promise = Promise; // allow us to chain .then instead of utilizing callback!

module.exports.Todo = require("./todo") /* using the model that is exported from models/to/do.js */