'use strict';

function diceRoll(typeDice) {
    const currentTypeDice = [
        { type: 'd4', maxResult: 4 },
        { type: 'd6', maxResult: 6 },
        { type: 'd8', maxResult: 8 },
        { type: 'd10', maxResult: 10 },
        { type: 'd12', maxResult: 12 },
        { type: 'd16', maxResult: 16 },
        { type: 'd20', maxResult: 20 }
    ];

    const type = currentTypeDice.find(e => e.type === typeDice);

    if (type) {
        return Math.floor(Math.random() * type.maxResult + 1)
    }

    return null;
}

console.log(diceRoll('d20'));