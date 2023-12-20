const secondsHand = document.getElementById('sec-hand');
const minsHand = document.getElementById('min-hand');
const hoursHand = document.getElementById('hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    const minutesDegree = ((minutes / 60) * 360) + 90;
    const hoursDegree = ((hours / 60) * 360) + 90;

    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
    minsHand.style.transform = `rotate(${minutesDegree}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
    console.log(seconds);
}

// Repeate The functon every second

setInterval(setDate, 1000)