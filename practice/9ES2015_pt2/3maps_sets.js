class MessageBoard {
    constructor(messages, id){
        this.messages = new Map;
        this.id = 1;
    }
    
    addMessage(value){
        this.messages.set(this.id, value);
        this.id++;
        return this;
    }
    
    findMessageById(id){
        return this.messages.get(id);
    }
    
    findMessageByValue(value){
        for(let val of this.messages.values(value)){
            if(val === value) return val;
        }
    }

    removeMessage(id){
        this.messages.delete(id);
        return this;
    }
    
    numberOfMessages(){
        return this.messages.size;    
    }
    
    messagesToArray(){
        return Array.from(this.messages.values());
    }
}

    /*
    (1) In your constructor method, you should assign two
    properties for each object created from the MessageBoard 
    class. The first should be a property called messages 
    which is an empty Map, and the second is a property 
    called id which has a value of 1. 
    
    var m = new MessageBoard
    
    m.hasOwnProperty('messages') // true
    m.messages.constructor // function Map() { [native code] }
    m.hasOwnProperty('id') // true
    m.id // 1
    */
    
    /*
    (2) Add a method called addMessage which accepts a string. 
    The function should add a key and value to the messages map 
    with a key of whatever the value of this.id is and a value of
    whatever the string is that is passed to the function. The 
    function should return the object created from the class so 
    that the method can be chained. (HINT - to implement the last
    part, make sure to return this).
    
    var m = new MessageBoard
    m.addMessage('hello');      // m
    m.messages.size             // 1
    m.addMessage('awesome!')    // m
    m.addMessage('awesome!').addMessage('nice!').addMessage('cool!') 
    */
    
    /*
    (3) Add a method called findMessageById which accepts a number 
    and returns the message in the messages map with the same key 
    as the number passed to the function. If the key is not found 
    in the messages map, the function should return undefined.
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.findMessageById(1) // 'hello!'
    m.findMessageById(2) // 'hi!'
    m.findMessageById(3) // 'whats up?'
    m.findMessageById(4) // undefined
    m.findMessageById() // undefined
    */
    
    /*
    (4) Add a method called findMessageByValue which accepts a
    string and returns the message in the messages map with the
    same value as the string passed to the function. If the 
    value is not found in the messages map, the function should
    return undefined.
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.findMessageByValue('hello!') // 'hello!'
    m.findMessageByValue('hi!') // 'hi!'
    m.findMessageByValue('whats up?') // 'whats up?'
    m.findMessageByValue('nothing here') // undefined
    m.findMessageByValue() // undefined
    */

    /*
    (5) Add a method called removeMessage which accepts a 
    number and removes a message in the messages map with 
    a key of the number passed to the function.
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.removeMessage(1)
    m.removeMessage(2)
    m.messages.size // 1
    m.removeMessage() // m
    */
    
    /*
    (6) Add a method called numberOfMessages which returns the number of keys in the messages map
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.numberOfMessages() // 3
    */
    
    /*
    (7) Add a method called messagesToArray which returns an array of all of the values in the messages map
    
    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.messagesToArray() // ['hello!', 'hi!', 'whats up?'])
    */




/*
Write a function called uniqueValues which accepts an 
array and returns the number of unique values in the array

uniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // 6
*/

function uniqueValues(arr){
    return new Set(arr).size;
}
uniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // 6

/*

Write a function called hasDuplicates which accepts 
an array and returns true if there are duplicate 
values in the array, otherwise it should return false.

hasDuplicates([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // true
hasDuplicates([1,2,3,4,5,6]) // false
hasDuplicates([]) // false
*/

function hasDuplicates(arr){
    return new Set(arr).size !== arr.length;
}

/*

Write a function called countPairs which accepts
an array of numbers and a number. The function 
should return the number of unique pairs (two numbers)
that sum up to the number passed to the function.

countPairs([8,2,6,4,10,0],10) // 3
countPairs([8,2],10) // 1
countPairs([1,2],10) // 0
countPairs([1,2,3,4,5],10) // 0
countPairs([],10) // 0
countPairs([5,4,-10,6,-20,16],-4) // 2
countPairs([0,-4],-4) // 1
*/



function countPairs(arr, num){
    var cache = new Set(arr);
    var count = 0;
    for(let val of arr){
        cache.delete(val)
        if(cache.has(num - val)){
            count++
        }
    }
    return count;  
}
