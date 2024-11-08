"use strict";

const app = document.querySelector('#app');
const p = document.createElement("p")

const currentYear = new Date().getFullYear()
const newYear = new Date(`${currentYear + 1}/1/1`)
p.innerText = "До нового года осталось:"
app.append(p)

setInterval(() => {
    let lostTime = new Date(newYear - new Date())
    p.innerText = `До нового года осталось: ${lostTime.getMonth()} мес., ${lostTime.getDate()} дн., ${lostTime.getHours()} ч., ${lostTime.getMinutes()} мин., ${lostTime.getSeconds()} сек.`
}, 1000)

