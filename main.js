const incrBtn=document.querySelectorAll(".inc");
let minutes;
let timer;
let breakNumber=5;
let workNumber=25;
let countdown;
let stopPoint;
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
    startBtn.addEventListener("click",function(){
        if(pauseBtn.hasAttribute("data-active")){
            startBtn.setAttribute("disabled","true");
            let start=Date.now();
            let then=start+stopPoint*60*1000;
            pauseBtn.removeAttribute("data-active");
            pauseBtn.removeAttribute("disabled");
            startWorkMod(then);}
        else{
        startBtn.setAttribute("disabled","true");
        breakNumber=document.querySelector(".break-number").innerHTML;
        workNumber=document.querySelector(".work-number").innerHTML;
        let start=Date.now();
        let then=start+minutes*60*1000;
        startWork(then);}
    })
    function startBreak(then){
        let minutes= breakN.innerHTML;
        let start=Date.now();
        then=start+minutes*60*1000;
        breakN.classList.add("active");
        countdown=setInterval(() =>{
            timer=(then-Date.now())/1000/60;
            breakN.innerHTML=Math.ceil(timer);
            console.log(timer.toFixed(2));
            if(timer<=0) {
                clearInterval(countdown);
                breakN.innerHTML=breakNumber;
                breakN.classList.remove("active");
                startWork(then);
                return
            }
        },1000)
    }
    function startWork(then){
        let minutes= workN.innerHTML;
        let start=Date.now();
        then=start+minutes*60*1000;
        workN.classList.add("active");
        countdown=setInterval(() =>{
            timer=(then-Date.now())/1000/60;
            workN.innerHTML=Math.ceil(timer);
            console.log(timer.toFixed(2));
            if(timer<=0){
                clearInterval(countdown);
                workN.innerHTML=workNumber;
                workN.classList.remove("active");
                console.log(workN.classList);
                startBreak(then);
                return
            }
        },1000)}
    const stopBtn=document.querySelector(".stop");
    stopBtn.addEventListener("click",()=>{
        clearInterval(countdown);
        workN.innerHTML=workNumber;
        breakN.innerHTML=breakNumber;
        startBtn.removeAttribute("disabled");
        workN.classList.remove("active");
        breakN.classList.remove("active");
        pauseBtn.removeAttribute("disabled");
        pauseBtn.removeAttribute("data-active");
    })
    const pauseBtn=document.querySelector(".pause");
    pauseBtn.addEventListener("click",()=>{
        startBtn.removeAttribute("disabled");
        pauseBtn.setAttribute("disabled","true");
        stopPoint=timer.toFixed(3);
        console.log(stopPoint);
        pauseBtn.setAttribute("data-active","true");
        workN.classList.remove("active");
        breakN.classList.remove("active");
        clearInterval(countdown);
    })
    function startWorkMod(then){
        startBtn.setAttribute("disabled","true");
        workN.classList.add("active");
            let minutes= stopPoint;
            let start=Date.now();
            then=start+minutes*60*1000;
            countdown=setInterval(() =>{
                timer=(then-Date.now())/1000/60;
                workN.innerHTML=Math.ceil(timer);
                console.log(timer.toFixed(2));
                if(timer<=0){
                    clearInterval(countdown);
                    workN.innerHTML=workNumber;
                    workN.classList.remove("active");
                    console.log(workN.classList);
                    stopPoint=breakNumber;
                    startBreakMod();
                    return }
                },1000)}
    function startBreakMod(){
        let minutes= stopPoint;
        let start=Date.now();
         then=start+minutes*60*1000;
        breakN.classList.add("active");
        countdown=setInterval(() =>{
            timer=(then-Date.now())/1000/60;
            breakN.innerHTML=Math.ceil(timer);
            console.log(timer.toFixed(2));
            if(timer<=0) {
                clearInterval(countdown);
                breakN.innerHTML=breakNumber;
                breakN.classList.remove("active");
                stopPoint=workNumber;
                startWorkMod(then);
                return
            }
        },1000)

    }