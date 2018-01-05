// forEach
    // format
        function forEach(array, callback){}
        function callback(curElement, currentIndex, array){}
    // non-forEach alternative
        var arr = [1,2,3,4,5,6];
        function double(arr){
            for(var i = 0; i < arr.length; i++){
                console.log(arr[i] * 2)
            }
        }
        double(arr);
    // forEach alternative
        var arr2 = [1,2,3,4,5,6];
        forEach(arr, function(n){
            console.log(n * 2)
        });
    // implementation of forEach
        function forEach(arr, callback){
            for (var i = 0; i < arr.length; i++){
                callback(arr[i], i, arr); // invoking the callback
            }
        }

// print an array with following words into a sentence: my, forEach, example!!!
    var strings = ['my', 'forEach', 'example'];
    var results = '';
    forEach(strings, function(str, index, array){
        if (array.length - 1 !== index){
            results += str + " ";
        } else {
            results += str + "!!!";
        }
    });