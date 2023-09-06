const minCounter = document.getElementById('mincounter');
const counter = document.getElementById('counter');
const startStopPomodoro = document.getElementById('switch');
const okButton = document.getElementById('okButton');
const lengthInfoText = document.getElementById('lengthInfoText');

let minutes = 0;
var seconds = 60;
var interval ;
let pomodoroGoing = false;
let pomodoroLength = 25;

let beat = new Audio('materials/bell.mp3');

lengthInfoText.innerHTML = `Długość trwania pomodoro: ${pomodoroLength} minut`;

okButton.onclick = updateLength;

function updateLength (){
  pomodoroLength = document.getElementById('length').value;
  lengthInfoText.innerHTML = `Długość trwania pomodoro: ${pomodoroLength} minut`;
}

function activatePomodoro() {
  if (!pomodoroGoing) {
    minutes = pomodoroLength - 1;
    seconds = 60; // Zresetuj sekundy do 60
    interval = setInterval(function () {
      if (minutes >= 0) {
        seconds--;
        document.body.style.background = "seagreen";
        counter.innerHTML = seconds < 10 ? `0${seconds}` : seconds.toString();
        minCounter.innerHTML = minutes < 10 ? `0${minutes}` : minutes.toString();
        startStopPomodoro.innerHTML = 'STOP';

        if (seconds === 0 && minutes > 0) {
          minutes--;
          seconds = 60; // Zresetuj sekundy do 60 po zmianie minut
          minCounter.innerHTML = minutes < 10 ? `0${minutes}` : minutes.toString();
        }

        if (minutes === 0 && seconds === 0) {
          document.body.style.background = "steelblue";
          startStopPomodoro.innerHTML = "START";
          beat.play();
          minCounter.innerHTML = `00`;
          counter.innerHTML = `00`;
          clearInterval(interval);
        }
      }
    }, 1000);
  } else {
    clearInterval(interval);
    startStopPomodoro.innerHTML = "START";
    document.body.style.background = "steelblue";
  }
  pomodoroGoing = !pomodoroGoing;
}

startStopPomodoro.onclick = activatePomodoro;
  



