import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const refs = {
    timePickerEl: document.querySelector('input#datetime-picker'),
    startBtEl: document.querySelector('button[data-start]'),
    daysFieldEl: document.querySelector('span[data-days]'),
    hoursFieldEl: document.querySelector('span[data-hours]'),
    minutesFieldEl: document.querySelector('span[data-minutes]'),
    secondsFieldEl: document.querySelector('span[data-seconds]'),
};
addStyles();
let timeoutIncluded = false;
let selectedTime;
let intervalID;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
        refs.startBtEl.disabled = true;
        Notiflix.Report.info('wrong date', "Please choose a date in the future", 'close');
        // window.alert("Please choose a date in the future");
      } else{
        clearInterval(intervalID);
        timeoutIncluded = true;
        refs.startBtEl.disabled = false;

        selectedTime = selectedDates[0];
        refs.startBtEl.addEventListener('click', onStartTimeoutClick);
      }
    },
};
const calendar = flatpickr(refs.timePickerEl, options);
function onStartTimeoutClick() {
    let differenceInTime = selectedTime - new Date();
    viewOfTimer(convertMs(differenceInTime));
    intervalID = setInterval(() => {

        const result = convertMs(differenceInTime);
        viewOfTimer(result);
        differenceInTime -= 1000;
    }, 1000);
}
function viewOfTimer({days, hours, minutes, seconds}) {
    refs.daysFieldEl.textContent = `${days}`;
    refs.hoursFieldEl.textContent = `${hours}`;
    refs.minutesFieldEl.textContent = `${minutes}`;
    refs.secondsFieldEl.textContent = `${seconds}`;
}
function pad(value) {
    return String(value).padStart(2, '0');
  }
function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = pad(Math.floor(ms / day));
    const hours = pad(Math.floor((ms % day) / hour));
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    const seconds = pad(
      Math.floor((((ms % day) % hour) % minute) / second)
    );
    return { days, hours, minutes, seconds };
}
function addStyles() {
  const fieldChildArray = [...document.querySelectorAll('.field > span:first-child')];
  const fieldArray = [...document.querySelectorAll('.field')];
  const timerEl = document.querySelector('.timer');
  fieldArray.map(el => {
    el.style.display = "flex";
    el.style.flexDirection = "column";
    el.style.marginLeft = "20px";
    el.style.textAlign = "center";
    el.style.fontFamily = "Courier New";
  })
  fieldChildArray.map(el => {
    el.style.fontSize = "50px";
  });
  timerEl.style.display = "flex";

};