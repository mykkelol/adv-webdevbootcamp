/*
findIndex
    - returns the index of the first element in the array for which the callback returns a truthy value
    - it would return -1 if callback does not return a truthy
*/

// findIndex Implementation
    // structure:
    function findIndex(array, callback){
        
    }
    function callback(currElement, currIndex, array){
        
    }
    // actual:
    function findIndex(array, callback){
        for (var i = 0; i < array.length; i++){    
            if (callback(array[i], i, array)){ // testing truthy
                return i;
            }
        }
        return -1; // after not finding truthy through loop of whole array, return -1 for falsy
    }
    
    // examples
        var arr = [3,5,6,9,1];
        findIndex(arr, function(num, index, array){
            return num === 6;
        });
        // findIndex returns 2 because 6's index is truthy
        
        var langs = ['Java', 'Python', 'Ruby', 'JS'];
        findIndex(langs, function(lang, index, array){
            lang === 'JS';
        })
        // findIndex returns -1 because function return is undefined since we never returned anything