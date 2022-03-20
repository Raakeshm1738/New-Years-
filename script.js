const newYears = '1 Jan 2023'
const daysval = document.getElementById('daysel');
const hoursval = document.getElementById('hoursel');
const minsval = document.getElementById('minutesel');
const secondsval = document.getElementById('secondsel')


function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const diff = (newYearsDate - currentDate)/1000;
    const days = Math.floor(diff/3600/24);
    // console.log(days);
    const hours = Math.floor(diff/3600)%24;
    // console.log(hours);
    const mins = Math.floor(diff*60)%60;
    // console.log(mins);
    const seconds  = Math.floor(diff)%60;
    console.log(days,hours,mins,seconds);
    daysval.innerHTML = days;
    hoursval.innerHTML = hours;
    minsval.innerHTML = mins;
    secondsval.innerHTML = seconds;


}


countDown();

setInterval(countDown,1000)