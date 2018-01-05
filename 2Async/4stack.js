/*
Stack
    - an ordered data structure
    - keeps track of function that we've invoked
    - part of JS runtime so we don't access directly ourselves
    - full definition: an order set of stack frames where most recent invoked function is on the top. therefore, first
    invoked function is at the bottom. the stack is process from top to bottom
How code changes the stack
    - when functions are invoked, details of the invocation are pushed to the top of the stack
    - when functions are returned, details are popped off from the top
    - the structure of the entire stack is refer to stack frame
*/

        function upperCaseFirst(word){
            return word[0].toUpperCase() + word.slice(1); // first return the capitalized index 0 and then concantenate it with sliced word
        }
        
        function upperCaseWords(sentence){
            var words = sentence.split(" "); // split the sentences where the spaces are to elements of array
            for (var i = 0; i < words.length; i++){
                words[i] = upperCaseFirst(words[i]); // callback for first index of word
            }
            return console.log(words.join(" ")); // join the elements from the array with space
        }
        
        upperCaseWords("lowercase words");

    // Stack process -- 26 > 18 > 19 > 20 > 21 > 14 > 15 > 23

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

/*
Heap
    - area in memory where your data is stored
*/
    // creating heap with object (in other words, new data is created)
    // obj here is a direct reference to the object
    var obj = {firstname: "Tim", lastname: "Garcia"};
    // new data is not created, just a copy of the reference
    var referenceCopy = obj;