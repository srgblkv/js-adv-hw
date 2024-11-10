"use strict";

class Car {
    #make;
    #model;
    #run;

    constructor(make, model, run) {
        this.#make = make;
        this.#model = model;
        this.run = run;
    }

    info() {
        console.log(`${this.#make} ${this.#model} ${this.#run}`);
    }

    get run() {
        return this.#run;
    }

    set run(run) {
        if (run < 0) {
            return this.#run = 0
        }
        return this.#run = run;
    }
}

const newCar = new Car('Porshe', '911', '10000');

newCar.info();
newCar.run = -15;
console.log(newCar.run);
