'use strict';

const data = [
    { id: 1, name: 'Vasya' },
    { id: 2, name: 'Petya' },
    { id: 1, name: 'Vasya' },
    { id: 4, name: 'Kolya' },
    { id: 3, name: 'Kolya' },
    { id: 1, name: 'Kolya' },
]

const setObj = new Set();

data.map(el => {
    for (const obj of setObj) {
        if (obj.id == el.id)
            setObj.delete(obj)
    }

    setObj.add(el)
})



console.log(setObj)
console.log(data)
