// Class is created with the following features of JS as it does not support OOP:
    // constant declartion; with const, a variable cannot be redeclared.
    // class is just an abstraction of constructor functions and prototypes
    
        // ES5: OOP with ES5
        
            function Student(firstname, lastname){
                this.firstname = firstname;
                this.lastname = lastname;
            }
            
            var mikey = new Student("Micheal", "Sihavong");
        
        // ES2015: OOP with ES2015; again, the following is literally just an abstraction of constructors/prototypes we previously used
        // see prototype in instance methods
        
            class Student {
                constructor(firstname, lastname){
                    this.firstname = firstname;
                    this.lastname = lastname;
                }
            }
            
            var mikey = new Student("Micheal", "Sihavong");

// Instance Methods
    // Elements are in array. Instances are in objects.
    // the instance methods are just a way of accessing objects like we've been doing our whole short coding life!
    
        // ES5: Old Instance method
        
            Student.prototype.sayHi = function(){
                return `Hello, ${this.firstname} ${this.lastname}!`;
            }
        
        // ES2015: New Instance method
    
            class Student {
                constructor(firstname, lastname){
                    this.firstname = firstname;
                    this.lastname = lastname;
                }
                sayHi() {
                    return `Hello, ${this.firstname} ${this.lastname}!`;
                }
            }