/*global $*/

// when not dataType is not specified, jQuery automatically guesses how to parse the data
    // in code below, we specified the datatype. If we didn't it would do JSON parse automatically
    
$("#btn").click(function(){
    $.ajax({
        method: "GET",
        url: "https://baconipsum.com/api/?type=meat-and-filler",
        dataType: "json"
    })
    .done(addParagraph)
    .fail(function(){
        alert("FAILED!");
    })
});

function addParagraph (data){
        $("#bacon").text(data[0]);
};

