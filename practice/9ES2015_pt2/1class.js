// 1 - Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.

    class Person {
        constructor(firstName, lastName, favoriteColor, favoriteNumber) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.favoriteColor = favoriteColor;
            this.favoriteNumber = favoriteNumber;
            this.family = [];
        }
        
        multiplyFavoriteNumber(num) {
            return this.favoriteNumber * num;
        }
        
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        
        addToFamily(obj){
            // check if an object has been created in the Person constructor
            // and if an object exists in the family array
            // if it doesn't then
            if(obj.constructor === Person && this.family.indexOf(obj) === -1){
                this.family.push(obj);
            }
            return this.family.length;
        }
    }

/* 2 - Add an instance method called multiplyFavoriteNumber that accepts one parameter and returns the product
of the parameter multiplied with the favoriteNumber property on a person object.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.multiplyFavoriteNumber(10) // 340

*/

/* 3 - Add a function on the Person class called fullName that returns the 
firstName and lastName property of an object created by the Person constructor concatenated together.

Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"
*/

// 4 -  Add a property on the object created from the Person class called 
// family which is an empty array. 

/* 5 - Add an instance on the Person class called addToFamily which adds an object constructed 
from the Person constructor to the family array. To make sure that the object you are adding 
is an object construced from the Person constructor (HINT - take a look at the instanceof keyword). 
Make sure that your family array does not include duplicates! This method should return the length of the family array.
Examples: 
    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    person.addToFamily(anotherPerson); // 1
    person.addToFamily(anotherPerson); // 1
    person.family.length // 1
    
    person.addToFamily("test"); // 1
    person.addToFamily({}); // 1
    person.addToFamily([]); // 1
    person.addToFamily(false); // 1
    person.family.length // 1
*/
