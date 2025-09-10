// //your code here
// let sec=document.querySelector(".second-hand")
// const d = new Date();
// let seconds = d.getSeconds();
// console.log(seconds) 
// sec.style.
// transform: rotate(seconds deg);
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Second hand
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Minute hand (includes seconds for smooth movement)
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // Hour hand (includes minutes for smooth movement)
  const hoursDegrees = ((hours % 12) / 12) * 360 + ((minutes / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call
