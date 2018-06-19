/*
Object.assign(target, ...sources);
    - used to copy values of one or more source objects to a target object, returning the target object.
    - allows us to create a copy without manipulating the main source (see code Example 1)
        + however, it is still not a deep clone and will have a problem when there's objects inside of the source object
*/

    // Code Example A:
    
        // Before (when we couldn't make copy):
            var o1 = {name: 'Elie'};
            var o2 = o1;
            o2.name = 'Tim';
            o1; // 'Tim'
            
        // After (with Object.assign):
            var o2 = Object.assign({},o1);
            o2.name = 'Tim';
            o2['title'] = 'instructor';
            o1 // {name: 'Elie'}
            o2 // {name: 'Tim', title: 'instructor'}
            
        // Problem (not deep clone so an object with objects will be problematic):
            var a1 = {instructor: ['Elie', 'Tim']};
            var a2 = Object.assign({},a1);
            a2.instructor.push('Colt');
            a2 // {instructor: ['Elie', 'Tim', 'Colt']};
            a1 // {instructor: ['Elie', 'Tim', 'Colt']};

/*
Array.from();
    - converts other data types into arrays by createing a shallow copy array from array-like or iterable objects
    - works similarly to [].slice.call();
*/
        // Example 1: 
            var divs = document.getElementsByTagName('div');
            var convertedInES5 = [].slice.call(divs);
            var convertedInES2015 = Array.from(divs);
        
        // Example 2:
            var firstSet = new Set([1,1,3,3,5,5]); // {1, 3, 5}
            Array.from(firstSet); // [1, 3, 5]