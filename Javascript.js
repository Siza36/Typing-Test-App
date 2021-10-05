const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

window.addEventListener("load", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

//random text
const randomText = [
    "A small town lies between the big cities."
    ,"Don't go there and don't stay here!",
    "You and Iron Man are two great men."
    ,"Is this big enough for you?"
    ,"Your face looks like a big rock!"
    ,"Is Tehran a big city in Iran?"
    ,"You’re a fantastic programer."
    ,"Don't open the hatch it's rainy!"
    ,"You are the Weakest Link!"
    ,"You can't miss it so don't."
    ,"You should wash the dishes."
    ,"If you go there, you will find him."
    ,"It’s fascinating that you know me."];
    const randomSentences =randomText[Math.floor( Math.random()*12)];
    const displayRandomm = document.querySelector("#txt").innerText=randomSentences;
    const sub = document.querySelector("#btn");
    console.log(randomSentences);
    //timer
    let timer = document.querySelector("#time");
    let sec = 0;
    let min = 0;
    
    //handle the timer
    const ipt = document.querySelector("#maininout");
    ipt.addEventListener("focus",function timerhandl(){
        var timerr = setInterval(()=>{
    
            sec++;
            if(sec >= 60){
            min++;
            sec=0;
            
            }
            timer.innerText = `${min<10?"0":""}${min}:${sec<10?"0":""}${sec}`;
            ipt.addEventListener("blur",()=>{
                clearInterval(timerr);
                
        })
        //submit the text
        sub.addEventListener("click",function sub(){
            if(ipt.value === randomSentences){
            const displayRandomm = document.querySelector("#txt")
            if(sec <= 10){
                displayRandomm.style.color="green";
                timer.style.color="green";
            }else if(sec>=25){
                displayRandomm.style.color="red";
                timer.style.color="red";
                displayRandomm.innerText = "Practice harder"
            }
            else if(sec<=25||sec >= 10){
                timer.style.color="orange";
                displayRandomm.style.color="orange";
                displayRandomm.innerText = "wasn't bad"
            }
            ipt.value ="";
            displayRandomm.innerText = `well done!!!! ${timer.innerText}`;
            }else{
    
            }
            });

        },1000)
    })