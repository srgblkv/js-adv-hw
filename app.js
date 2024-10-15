'use strict';

const data = [
    { id: 1, name: 'Vasya' },
    { id: 2, name: 'Petya' },
    { id: 1, name: 'Vasya' },
    { id: 4, name: 'Kolya' },
    { id: 3, name: 'Kolya' },
    { id: 1, name: 'Kolya' },
];

const setId = new Set([...new Map(data.map(el => [el.id, el.name]))]);

console.log(setId);