// the root route index.js is dedicated for our functional to/do list
// the underlying file is our api route that will be in 'app.com/api/todos/'

var express = require('express');
var router = express.Router(); // router allows us to break our routes to modular chunks and we can require it back in our main app file (index.js)
var db = require('../models'); // requiring our models/compiled schemas directory which will automatically look for index.js first
var helpers = require('../helpers/todos'); // to keep the underlying file clean, we use a helper in the helper directory which contains all of our routes

router.route('/') // the get and post request can be categorized in the same collection because they share path
    .get(helpers.getTodos)
    .post(helpers.createTodo);
    
router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);

module.exports = router;