/* global $ */


// everything in document.ready will load after the DOM has been loaded
$(document).ready(function(){
    $.getJSON("/api/todos")
    .then(addTodos);
    
    /* when user type into input */
    $('#todoInput').keypress(function(event){
        if(event.which == 13){ // the enter key code is 13
            // create to/do when user press enter
            createTodo();
        } 
    });
    
    // when user click on the to/do to indicate completion of a to/do
    $('.list').on('click', 'li', function(){
        updateTodo($(this)); // pass in the <li>
    });
    
    // when user select X do the following event
        // we selected .list first because if we selected span which appears are the DOM event, it won't work
        // instead we select something that exist immediately in the HTML, .list.
        // the second argument, 'span', specifies that the event only happens the span is clicked and not when user click anywhere on the <li>
    $('.list').on('click', 'span', function(event){ //
        event.stopPropagation(); // a method to prevent the event from bubbling up (completing multiple events) by ignoring the parent event
        removeTodo($(this).parent());
    });
});

function addTodos(todos){
    // show todos on page
    todos.forEach(function(todo){
        addTodo(todo);
    });
}

function addTodo(todo){
    // add to/do functionality
    var newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
    newTodo.data('id', todo._id); // jQuery has a method .data to store key and value of objects. Here, we stored mongos' generated ._id value
    newTodo.data('completed', todo.completed); // saving the completed key and its associated value
    if(todo.completed){
        newTodo.addClass('done'); // class done is greying out the <li>
    }
    $('.list').append(newTodo); // add the newTodo to <ul> and showing it
}


function createTodo(){
    // send post request to create a new to/do
    var usrInput = $('#todoInput').val();
    $.post('/api/todos',{name: usrInput})
    .then(function(newTodo){
        $('#todoInput').val(''); // clearing input after user press enter
        addTodo(newTodo);
    })
    .catch(function(err){
        console.log(err);
    })
}

function updateTodo(todo){
    var updateUrl = '/api/todos/' + todo.data('id');
    var isDone = !todo.data('completed'); // negate(!) because when user click it, it will flip the list to its opposite counterpart of true vs. false
    var updateData = {completed: isDone}; // we store it here because it (the data portion of jquery below) wants the true/false boolean as a string
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updateData // jQuery takes our object and complete put request
    })
    .then(function(){
        todo.toggleClass("done"); // add the done class when user click
        todo.data('completed', isDone); // make jQuery reset our completed variable with isDone -- isDone, as previously noted, is going to negate to its opposite counterpart
    })
    .catch(function(err){
        console.log(err);
    })
}

function removeTodo(todo){
    var deleteUrl = '/api/todos/' + todo.data('id');
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
    .then(function(){
        todo.remove(); // removes the <li> from the DOM; this keyword is the span and its parent is the <li>
    })
    .catch(function(err){
        console.log(err);
    });
}