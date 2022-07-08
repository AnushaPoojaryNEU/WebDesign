//Global Variables
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let seconds = 0;
let interval = null;

//Event Listeners
start_btn.addEventListener('click',start);
stop_btn.addEventListener('click',stop);
reset_btn.addEventListener('click',reset);

//Promises
//Update Timer (PROMISE)
function timer(){
    return new Promise(resolve => {
        seconds++;

        //Format Time
        let hrs = Math.floor(seconds/3600);
        let mins = Math.floor((seconds - (hrs*3600))/60);
        let secs = seconds % 60;
    
    
    
        if(secs<10) secs = '0' + secs;
        if(mins<10) mins = '0' + mins;
        if(hrs<10) hrs = '0' + hrs;
    
        time_el.innerText = `${hrs}:${mins}:${secs}`;
        resolve();
    })
}

//Start function - to Start Timer (PROMISE)
function start(){
    return new Promise(resolve =>{
        if(interval){
            return
        }
    
        interval = setInterval(timer,1000);
        resolve();
    })
}

//Stop Function - to Stop Timer (PROMISE)
function stop(){
    return new Promise(resolve =>{
        clearInterval(interval);
        interval = null;
        resolve();
    })
}

//Async function -> reset()
//Reset Function - To Reset Timer
async function reset(){
    await stop();
    seconds = 0;
    time_el.innerText = '00:00:00';
}
