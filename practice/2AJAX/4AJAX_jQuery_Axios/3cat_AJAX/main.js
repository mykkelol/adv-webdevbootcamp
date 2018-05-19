/* global $ */

$("#btn").click(function(){
    $.getJSON("https://dog.ceo/api/breeds/image/random")
    .done(getCat)
    .fail(prError);
});

function getCat(data){
    $("img").attr("src", data.message);
}

function prError(){
    console.log("REQUEST IS NOT PAWSIBLE!");
}