/* global $ */


// $.get, $.post, and $.getJSON are shorthands of $.ajax
    // the $.get is just $.ajax with a get request and vice versa for $.post
    // the $.getJSON is just $.ajax with a get request and datatype = 'JSON' so that it automatically parses JSON 

$("#getBtn").click(function(){
  $.get('https://api.github.com/users/colt')
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    console.log("ERROR!");
  })
});

$("#postBtn").click(function(){
 var data = {name: "Charlie", city: "Florence"};
 $.post("www.catsarecoolandsoaredogs.com", data) // data $.post's input for data to post request
  .done(function(data){
   console.log("HI!");
 })
  .fail(function(){
   console.log("ERROR!");
 })
});

$("#getJSONBtn").click(function(){
  $.getJSON("https://api.github.com/users/colt")
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    console.log("PROBLEM!");
  })
});
