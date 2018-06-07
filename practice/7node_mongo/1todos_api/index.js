var express = require('express'), // web framework that allow us to create clean RESTful routing
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
    
var todoRoutes = require('./routes/todos'); // require our route, allowing us to use to route in code below

app.use(bodyParser.json()); // allow all routes to access the request body
app.use(bodyParser.urlencoded({extended: true})); // allow all routes to access the request body

app.get('/', function(request, response){   // get request for the main page or '/'
    response.send("HELLO FROM THE ROOT ROUTE");
});

app.use('/api/todos', todoRoutes);  // get request for the API page. 
                                    // this will seperate the '/' route in our root route from the '/' of the to-do route; specifically, /api/todos/

app.listen(port, function(){    // start server
    console.log("APP IS RUNNING ON PORT: " + port);
});