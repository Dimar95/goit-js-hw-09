import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const refs = {
    start: document.querySelector('[data-start]'),
    timer: document.querySelector('.timer'),
    value: document.querySelector('.value'),
    label: document.querySelectorAll('.label'),
    field: document.querySelector('.field'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    input: document.querySelector('#datetime-picker'),
};

refs.start.setAttribute("disabled", "disabled");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose
};
const flatpickrTimer = new flatpickr(refs.input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
console.log(days, hours, minutes, seconds );

  return { days, hours, minutes, seconds };
}
function onClose(selectedDates) {
      if (selectedDates[0] >= new Date()) {
        alert("Please choose a date in the future")
      }
        console.log(selectedDates[0]);
        onTimerStart(selectedDates[0])
  }
function onTimerStart(time) {
        // timeForTimer = ;

    const intervalId = setInterval(timeForTimer(time), 1000)
    console.log("🎅 ~ intervalId", intervalId)
    

}
function timeForTimer(time) {
    return time - new Date()
}

function onTimerMarkup() {
    
}