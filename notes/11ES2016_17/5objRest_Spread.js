/*
    Object Rest
        - gather the remaining keys and values in an object and creates a new one
*/

        // Example A:
            var instructor = {first: 'Colt', last: 'Steele', job: 'instructor', numSiblings: 3},
                {first, last, ...data} = instructor;
            first;  // 'Colt'
            last;   // 'Steele'
            data;   // {job: 'instructor', numSiblings: 3}
        
        // Example B:
            var rest = [3, 4, 5],
                a,
                b,
                numbers;
                
            [a, b] = [1, 2];
            numbers = [a, b, ...rest];
            
/*
    Object Spread
        - spread out keys and values from one object to another; useful for objects starting with default values
        - works similarly to Object.assign() where {...source, targets};
*/

        // Example A: 
            var instructor = {first: 'Colt', last: 'Steele', job: 'instructor'},    // Colt, Steele, instructor
                instructor2 = {...instructor, first: 'Micheal', last: 'Sihavong'};  // Micheal, Sihavong, instructor
                
        // Example B:
            var defaults = {job: 'instructor', catPerson: true, dogPerson: true},
                matt = {...defaults, dogPerson: false},
                colt = {...defaults, catPerson: false};