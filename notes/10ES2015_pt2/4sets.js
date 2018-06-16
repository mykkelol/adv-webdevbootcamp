// Sets is referred to as hash maps in other lang
    // another data structure where all values are unique (see code example A) and values can be any datatype
    // maps methods includes: .add, .delete, .has, .size
    // maps is a symbol.iterator which allow us to use for Of loop
// Weakset is another form of maps
    // it's more performant than sets, but can't be iterated over
    // similar to a weakmap where all keys must be objects, a weakset values must be objects
    // values in a WeakSet can be cleared from memory if there's no reference to it
    
    // Code A:
        var s = new Set([3,1,4,1,2,1,5]); // 3 1 4 2 5
        
        s.add(10);
        s.size;     // 6
        s.has(5);   // true
    