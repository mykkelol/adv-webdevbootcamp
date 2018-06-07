var db = require('../models');

exports.getTodos = function(req,res){ // '/api/todos/' route and the route for sending data to db
    db.Todo.find()  // it will find all todos in our To/do database
    .then(function(todos){
        res.json(todos); // parse todos
    })
    .catch(function(err){
        res.send(err);
    });
}

exports.createTodo = function(req,res){ // '/api/todos/' route and the route for creating data in db route
    db.Todo.create(req.body) // it will create a new to/do in our To/do db
    .then(function(newTodo){ 
        res.status(201).json(newTodo); // 201 is when something is created
    })
    .catch(function(err){
        res.send(err);
    });
}

// although in the current app, the following get request is useless, this is a common practice across web dev
// The following get request will access only 1 single to/do. This is useful for comments, tags, hash, etc. in instagram for example
exports.getTodo = function(req,res){ // will only route to 'api/todos/:todoId' and not anything else
    db.Todo.findById(res.params.todoId) // params refers to the path's data; in this case, :todoId is the params that we are trying to find
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.updateTodo = function(req,res){ // put request to update current page
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true}) // (the found id, the update) and new:true will responsd with updated data instead of old
    .then(function(updatedTodo){
        res.json(updatedTodo);
    })
    .catch(function(err){
        res.send(err); 
    });
}

exports.deleteTodo = function(req,res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.json({message: "Todo removed!"});
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports = exports; // exporting helper to other files