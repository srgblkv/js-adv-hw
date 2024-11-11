'use strict';

class Character {
    #race;
    #name;
    #lang;

    constructor(race, name, lang) {
        this.#race = race;
        this.#name = name;
        this.#lang = lang;
    }

    get race() {
        return this.#race
    }

    get name() {
        return this.#name
    }

    get lang() {
        return this.#lang
    }

    say() {
        console.log(`An ${this.race}. My name is ${this.name}. I speak ${this.lang}`)
    }
}

class Ork extends Character {
    #weapon

    constructor(race, name, lang, weapon) {
        super(race, name, lang)
        this.#weapon = weapon
    }

    say() {
        console.log(`Nag'goroth ${this.race}. Nag'goroth ${this.name}. Nag'goroth ${this.lang} yal'gosh`)
        return this
    }

    hit() {
        console.log(`Нанес удар оружием ${this.#weapon}`)
        return this
    }
}

class Elf extends Character {
    #spell

    constructor(race, name, lang, spell) {
        super(race, name, lang)
        this.#spell = spell
    }

    say() {
        console.log(`An ${this.race}. Mae anam ${this.name}, an'el anam ${this.lang}`)
        return this
    }

    cast() {
        console.log(`Кастует заклинание ${this.#spell}`)
        return this
    }
}



new Ork('ork', 'trall', 'orcish', 'axe').say().hit()
new Elf('elf', 'Lhuna', 'Elvish', 'snowball').say().cast()

