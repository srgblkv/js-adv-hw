"use strict";

class Car {
    #make;
    #model;
    #run;

    constructor(make, model, run) {
        this.#make = make;
        this.#model = model;
        this.#run = this.setRun(run);
    }

    info() {
        console.log(`${this.#make} ${this.#model} ${this.getRun()}`);
    }

    getRun() {
        return this.#run;
    }

    setRun(run) {
        if (run < 0) {
            return 0;
        }
        return this.#run = run;
    }
}

const newCar = new Car('Porshe', '911', '-10000');

newCar.info();
newCar.setRun(123124515261);
console.log(newCar.getRun());
