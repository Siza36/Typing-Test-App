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
        },1000)
    })
//submit the text 
const sub = document.querySelector("#btn");
sub.addEventListener("click",function sub(){
    if(ipt.value === randomSentences){
        const displayRandomm = document.querySelector("#txt")
        displayRandomm.style.color="green";
        ipt.value ="";
        modaltext.innerText = `well done!!!! ${timer.innerText}`;
    }
});
