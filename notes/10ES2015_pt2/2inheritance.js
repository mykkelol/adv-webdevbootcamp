// Passing along methods and properties from one class to another
    // Same concept as ES5, but subtantively shorter code with keywords 'extends' (ln 29) and 'super' (ln 31)
    

    // ES5: Inheritance
    
        function Student(firstName, lastName){
            Person.apply(this, arguments);
        }
        
        Student.prototype = Object.create(Person.prototype);
        Student.prototype.constructor = Student;    
    
    // ES2015: Inheritance
    
        // Parent class
        class Person {
            constructor(firstName, lastName){
                this.firstName = firstName;
                this.lastName = lastName;
            }
        
            sayHi() {
                return `Hello, ${this.firstName} ${this.lastName}!`;
            }
        }
        
        // Children class
        class Student extends Person {          // alternative of Object.create and dunder proto constructor
            constructor(firstName, lastName){
                super(firstName, lastName);     // alternative of .apply or .call; can only be used if methods have the same name as the parent class
            }   
        }
            // Instead of having arguments in the constructor in the children class,
            // we can also eliminate all of that and instead do super(...arguments) to spread any inputs from users
            // since it will be applied to the parent class anyways