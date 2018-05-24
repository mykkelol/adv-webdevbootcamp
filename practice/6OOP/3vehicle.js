function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    // initialize isRunning as off
    this.isRunning = false;
}

// turn isRunning on
Vehicle.prototype.turnOn = function(){
    // this should be the nearest corresponding object, which I believe is Vehicle.prototype lol
    this.isRunning = true;
}

// turn isRunning off
Vehicle.prototype.turnOff = function(){
    this.isRunning = false;
}

// beep only if car is on
Vehicle.prototype.honk = function(){
    if (this.isRunning === true){
        return "beep beep";    
    }
}

var micheal = new Vehicle('Volkswagen','Jetta',2007);