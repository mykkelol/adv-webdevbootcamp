var express = require('express'), // web framework that allow us to create clean RESTful routing
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'); // body parsing middleware that allow all routes to request the body
    
var todoRoutes = require('./routes/todos'); // requiring our '/api/todos/' route

app.use(bodyParser.json()); // allow all routes to access the request body
app.use(bodyParser.urlencoded({extended: true})); // allow all routes to access the request body
app.use(express.static(__dirname + '/views')); // dirname refers to current directory name and we are telling express that our static files are in the views folder
app.use(express.static(__dirname + '/public')); // same as above but for app.css and app.js files

app.get('/', function(request, response){   // get request for the main page or '/'
    response.sendFile('index.html'); // send files is referring to current directory /views because we did app.use(express.static)
});

app.use('/api/todos', todoRoutes);  // using the '/api/todos/' route. 

app.listen(port, function(){    // start server
    console.log("APP IS RUNNING ON PORT: " + port);
});