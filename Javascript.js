//timer
let timer = document.querySelector("#time");
let sec = 0;
let min = 0;
setInterval(function(){
sec++;
if(sec >= 60){
min++;
sec=0;
}
timer.innerText = `${min<10?"0":""}${min}:${sec<10?"0":""}${sec}`;
},1000)

