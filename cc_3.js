//U9414-0233
//Implement a Car class with a constructor that initializes the make (brand of the car) and speed (current speed in km/h) properties.

accelerate_KPHvalue = 10
brake_KPHvalue = 5

class Car {
    constructor(make, currentKPH) {
      this.make = make;
      this.currentKPH = Num(currentKPH);
    }
    //Implement an accelerate method in the Car class that increases the car's speed by 10 km/h and logs the new speed to the console.
    accelerate() {
        this.currentKPH += accelerate_KPHvalue;
        console.log ("The new speed of the " + this.make + " after accelerating " + accelerate_KPHvalue + "KM/h is " + this.speed + "KM/h.");
    }
    //Implement a brake method that decreases the car's speed by 5 km/h and logs the new speed to the console.
    brake() {
        this.currentKPH -= brake_KPHvalue;
        console.log ("The new speed of the " + this.make + " after braking " + brake_KPHvalue + "KM/h is " + this.speed + "KM/h.");
    }
}