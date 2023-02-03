const refs = {
    startButtonEl: document.querySelector('button[data-start]'),
    stopButtonEl: document.querySelector('button[data-stop]'),
    bodyEl: document.querySelector('body'),
};

refs.startButtonEl.addEventListener('click', onStartClick);
refs.stopButtonEl.addEventListener('click', onStopClick);


function onStartClick(evt) {
    if (refs.stopButtonEl.disabled) {
        refs.stopButtonEl.disabled = false;
    }
    refs.startButtonEl.disabled = true;
    return interval = setInterval(() => {
        addRandomBackgroundColor(refs.bodyEl);
    }, 1000);
}
function onStopClick() {
    if (refs.startButtonEl.disabled) {
        refs.startButtonEl.disabled = false;
    }
    refs.stopButtonEl.disabled = true;
    clearInterval(interval);
}
function addRandomBackgroundColor(el) {
    el.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }