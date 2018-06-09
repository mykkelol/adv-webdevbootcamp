// An alternative to var declaration. When using var to declare a variable, the variable can be redeclared.
// With const, a variable can never be redeclare
    // If a const variable is an array, however, it can be manipulated.
    // In essence, const make a string, for example, immutable but not for objects like array.
    
    
    var micheal = "cool";
    micheal = "lame"; // return "lame"
    
    const mikey = "cool"
    mikey = "lame"; // return TypeErr
    
    const mikeyArr = ["cool", "awesome"]
    mikeyArr.push("lame")
    mikeyArr // returns ["cool", "awesome", "lame"]