'use strict';


function isAdult(bDayDate) {
    const PASSING_AGE = 14
    const birthdayDate = new Date(bDayDate)
    const nowDate = new Date()

    return birthdayDate.setFullYear(birthdayDate.getFullYear() + PASSING_AGE) <= nowDate
}

console.log(isAdult('2011/01/01'))