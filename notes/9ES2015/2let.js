// let, in global scope, function similarly like var except it cannot be redeclared. It's similar in that you can reassign
// the let keyword, in block scope, is how it differntiates itself from var. See code below:
    // in essence, when declared in a block scope, a var declaration can be accessed outside the block but a let declaration cannot 
    // block scope includes if, for, while, do, catch, try
    
        if(1+1==2){
            var mikey = 'hi';
        }
        
        if(1+1==2){
            let mike = 'hi';
        }
        
        mikey; // "hi"
        mike; // Reference Err
        
// useful for the following scenario:

        for(var i = 0; i < 5; i++){
        	setTimeout(function(){
        	console.log(i);
            },1000);
        }
        // prints 5 after 1 second, because it has already complete 5 iterations before 1000ms
        // it is also because var keyword declares globally
        
        for(let j = 0; j < 5; j++){
        	setTimeout(function(){
        	console.log(j);
            },1000);
        }
        // prints the following after 1 second:
        // 0
        // 1
        // 2
        // 3
        // 4
        // because it is declared in a block scope. This is illsutrated when you enter i which prints 5
        // and j would result in referenceErr. It's because the number is not stored on the global scope after the iteration is completed.