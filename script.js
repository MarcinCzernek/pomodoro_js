const minCounter = document.getElementById('mincounter');
const counter = document.getElementById('counter');
const button = document.getElementById('switch');
const okLength =document.getElementById('oklength');
const lenInfo = document.getElementById('lenInfo');

let minutes = 0;
var seconds = 60;
var interval ;
let going = false;
let length = 25;

lenInfo.innerHTML = `Długość trwania pomodoro: ${length} minut`;

okLength.onclick = function(){
    length =  document.getElementById('length').value;
    lenInfo.innerHTML = `Długość trwania pomodoro: ${length} minut`;
}

let beat = new Audio('materials/bell.mp3');

button.onclick = function() {
    if (!going) {
        minutes = length - 1;
        interval = setInterval(function () {
            if (minutes > 0) {
                seconds--;
                document.body.style.background = "seagreen";
                counter.innerHTML = `${seconds}`;
                minCounter.innerHTML = `${minutes}`;
                button.innerHTML = 'STOP';
                if (seconds == 0 && minutes > 0) {
                    minutes--;
                    if(minutes > 0){
                        seconds = 60;
                        console.log('minutes > 0');
                    }
                    console.log('seconds == 0 && minutes > 0');
                    minCounter.innerHTML = `${minutes}`;
                }if(minutes == 0){
                    console.log(seconds)
                    seconds = 60
                    document.body.style.background = "steelblue";
                    button.innerHTML = "START";
                    beat.play();
                    minCounter.innerHTML = `00`;
                    counter.innerHTML = `00`;
                    clearInterval(interval);
                    console.log('minutes == 0');
                }
            }
        }, 1000)
    }else{
        clearInterval(interval);
        button.innerHTML = "START";
        document.body.style.background = "steelblue";
    }
    going = !going;
};

