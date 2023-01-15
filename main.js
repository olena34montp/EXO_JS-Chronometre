let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let myInterval;
let millisecondsEl = document.querySelector('.number-msec');
let secondsEl = document.querySelector('.number-sec');
let minutesEl = document.querySelector('.number-min');
let hoursEl = document.querySelector('.number-hour');


function start () {
  stop();
  myInterval = setInterval(update_chrono, 10);
  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = false;
}

function stop () {
  clearInterval(myInterval);
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
}

function reset () {
  stop();
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
  clearInterval(myInterval);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  affichage(hours, minutes, seconds, milliseconds);
}

function update_chrono() {
  milliseconds += 10;

  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;

    if (seconds == 60) {
      seconds = 0;
      minutes++;

      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  affichage(hours, minutes, seconds, milliseconds);
}


function affichage(hours, minutes, seconds, milliseconds) {
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
  millisecondsEl.innerHTML = milliseconds;}
