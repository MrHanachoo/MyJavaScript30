/**
 * Created by mhan on 12/13/16.
 */

const secsHand = document.querySelector('.sec-hand');
const minutesHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand")
//console.log(secsHand, minutesHand, hourHand);

function setDate() {
    const  now =new Date();

    const secs = now.getSeconds();
    const secsDegrees = secs * 360 / 60 + 90;
    secsHand.style.transform = `rotate(${secsDegrees}deg)`;
    console.log(secs, secsDegrees);

    const mins =  now.getMinutes();
    const minsDegrees = mins * 360 / 60 + 90;
    minutesHand.style.transform = `rotate(${minsDegrees}deg)`;
    console.log(mins, minsDegrees);

    const hour =  now.getHours();
    const hourDegrees = hour * 360 / 12 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(hour, hourDegrees, "===");

}

setInterval(setDate, 1000);