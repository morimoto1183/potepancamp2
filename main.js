let timer=document.getElementById('timer');
let start=document.getElementById('start');
let stop=document.getElementById('stop');
let reset=document.getElementById('reset');

let startTime;
let timeoutId;
let elapsedTime = 0; 

function countUp() {
    const d = new Date(Date.now() - startTime);
    const h = String(d.getUTCHours()).padStart(1,'0');
    const m = String(d.getMinutes()).padStart(1, '0');
    const s = String(d.getSeconds()).padStart(1, '0');
    const ms = String(d.getMilliseconds()).padStart(1, '0').slice(0, 1);
    timer.textContent = `${h}:${m}:${s}:${ms}`;

    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }
  
start.addEventListener('click', () => {
    startTime = Date.now();
    countUp();
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = false;
  });
  
stop.addEventListener('click', () => {
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
    console.log(elapsedTime);
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
  });
  
reset.addEventListener('click', () => {
    timer.textContent = '0:0:0:0';
    elapsedTime = 0;
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
  });
 