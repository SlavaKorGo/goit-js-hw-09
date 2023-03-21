
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
 stopBtn.setAttribute('disabled', '');

  const colorSwither = () => {
body.style.backgroundColor = getRandomHexColor();
  }

startBtn.addEventListener('click', () => {
    timerId = setInterval(colorSwither, 1000); 
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener('click',() => {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});
