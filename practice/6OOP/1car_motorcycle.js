function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle(make, model, year){
    // .apply > .call because .apply will spread elements in array into its own elements
    Car.apply(this,arguments);
    this.numWheels = 2;
}

var micheal = new Car("Volkswagen", "Jetta", 2007);
var mike = new Motorcycle("Kawasaki", "Ninja", 2007);