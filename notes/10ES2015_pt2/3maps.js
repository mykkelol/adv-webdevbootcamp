// Maps is referred to as hash maps in other lang
    // it's similar to objects, excepts keys can be ANY data type including array and object 
        // object keys can only be string
    // maps methods includes: .set, .delete, .size, .get, .has, .find, .values (search by values instead of keys)
    // maps is a symbol.iterator which allow us to use for Of loop
// Weakmap is another form of maps
    // it's more performant than maps, but can't be iterated over
    // all keys must be objects
    // values in a WeakMap can be cleared from memory if there's no reference to it
    
    
var firstMap = new Map;

firstMap.set(1, 'Elie');
firstMap.set(false, 'a boolean');
firstMap.set('nice', 'a string');
firstMap.delete('nice');
firstMap.size;

var arrayKey = [];
firstMap.set(arrayKey,[1,2,3,4,5]);

firstMap.get(1);            // 'Elie'    
firstMap.get(arrayKey)[3];  // 4    