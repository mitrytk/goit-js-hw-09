const refs = {
    startButtonEl: document.querySelector('button[data-start]'),
    stopButtonEl: document.querySelector('button[data-stop]'),
    bodyEl: document.querySelector('body'),
};
let intervalId = null;

refs.startButtonEl.addEventListener('click', onStartClick);
refs.stopButtonEl.addEventListener('click', onStopClick);

function onStartClick(evt) {
    if (refs.stopButtonEl.disabled) {
        refs.stopButtonEl.disabled = false;
    }
    refs.startButtonEl.disabled = true;
    intervalId = setInterval(() => {
        addRandomBackgroundColor(refs.bodyEl);
    }, 1000);
}
function onStopClick() {
    if (refs.startButtonEl.disabled) {
        refs.startButtonEl.disabled = false;
    }
    refs.stopButtonEl.disabled = true;
    clearInterval(intervalId);
}
function addRandomBackgroundColor(el) {
    el.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }