
const counter = document.getElementById('counter');
const button = document.getElementById('switch');

var seconds = 0;
var interval ;
let going = false;
let length = 25;
const okLength =document.getElementById('oklength');
const lenInfo = document.getElementById('lenInfo');
lenInfo.innerHTML = `Długość trwania pomodoro: ${length} minut`;

okLength.onclick = function(){
    length =  document.getElementById('length').value;
    lenInfo.innerHTML = `Długość trwania pomodoro: ${length} minut`;
}

let beat = new Audio('bell.mp3');

button.onclick = function(){
    if (!going){
        seconds = length*60 || 0;
        interval = setInterval(function() {
            document.body.style.background = "seagreen";
            counter.innerHTML = `Pozostałe sekundy: ${seconds}`;
            seconds--;
            if(seconds <= 0){
                clearInterval(interval);
                document.body.style.background = "steelblue";
                beat.play();        }   },1000)
        counter.innerHTML = `Pozostałe sekundy: ${seconds}`;
        button.innerHTML = 'STOP';
    }else{
        clearInterval(interval);
        button.innerHTML = "START";
        document.body.style.background = "steelblue";
    }
    going = !going;
};