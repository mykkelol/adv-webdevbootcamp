var mongoose = require('mongoose');

// schema is necessary for data structured in our db. If a post request was made for example 
// that wasn't specified in the schema, it won't add the request to body

var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!' // if users leave it blank, we'd get a error
    },
    completed: {
        type: Boolean,
        default: false // default false because in a to-do, if you've done something it would be true.
    },
    created_date: {
        type: Date,
        default: Date.now // time stamp is current time of when user create a to-do
    }
});

var Todo = mongoose.model('Todo', todoSchema); // compile schema to a model
module.exports = Todo; // this will export compiled model to index.js or any other file
