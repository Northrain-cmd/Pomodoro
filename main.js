const incrBtn=document.querySelectorAll(".inc");
let minutes;
let countdown;
const workN=document.querySelector(".work-number");
const breakN=document.querySelector(".break-number")
const decBtn=document.querySelectorAll(".dec");
    incrBtn.forEach(button=>{
        button.addEventListener("click",()=>{
            let number = button.nextElementSibling.firstElementChild;
            number.innerHTML=`${Number(number.innerHTML)+1}`;
        })
    })
    decBtn.forEach(button=>{
        button.addEventListener("click",()=>{
            let number = button.previousElementSibling.firstElementChild;
            if( number.innerHTML>1){
            number.innerHTML=`${Number(number.innerHTML)-1}`;}
            else{
                number.innerHTML=1;
            }
        })
    })
    const startBtn= document.querySelector(".start");
    startBtn.addEventListener("click",() =>{
        let minutes= document.querySelector(".work-number").innerHTML;
        let start=Date.now();
        let then=start+minutes*60*1000;
        countdown=setInterval(() =>{
            timer=(then-Date.now())/1000/60;
            workN.innerHTML=Math.ceil(timer);
            console.log(timer.toFixed(2));
            if(timer<=0){
                clearInterval(countdown);
                workN.innerHTML=25;
                return
            }
        },1000)
    })
    