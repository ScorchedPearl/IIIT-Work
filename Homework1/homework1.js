const hourData = document.getElementById('hour');
const minuteData = document.getElementById('minute');
const secondData = document.getElementById('second');
const row = document.getElementById('trow');
const AmPm = document.createElement('td');
const button = document.getElementById('AmPm');
let clicked = false;

button.onclick = function() {
  clicked = !clicked;
  console.log(clicked);
};

setInterval(() => {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let period = '';
  if (clicked) {
    period = hour >= 12 ? 'PM' : 'AM';
    if (hour > 12) hour -= 12;
    if (hour === 0) hour = 12;
    AmPm.innerHTML = period;
    if (!row.contains(AmPm)) row.appendChild(AmPm);
  } else {
    if (row.contains(AmPm)) row.removeChild(AmPm);
  }

  hourData.innerText = hour;
  minuteData.innerText = minute;
  secondData.innerText = second;
}, 1000);
