"use strict";

const Person = function (race, name, lang) {
    this.race = race
    this.name = name
    this.lang = lang
}
Person.prototype.say = function () {
    return `${this.lang}, ${this.name}`
}



const Ork = function (race, name, lang, weapon) {
    Person.call(this, race, name, lang)
    this.weapon = weapon
}
Ork.prototype = Person.prototype
Ork.prototype.hit = function () {
    return `${this.name} hits ${this.weapon}`
}



const Elf = function (race, name, lang, spell) {
    Person.call(this, race, name, lang)
    this.spell = spell
}
Elf.prototype = Person.prototype
Elf.prototype.cast = function () {
    return `${this.name} casts ${this.spell}`
}




const ork = new Ork('Ork', 'Trall', 'Ork', 'Axe')
const elf = new Elf('Elf', 'Eluna', 'Common', 'Smite')

console.log(ork.say())
console.log(ork.hit())

console.log(elf.say())
console.log(elf.cast())
