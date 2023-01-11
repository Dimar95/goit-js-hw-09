import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    start: document.querySelector('[data-start]'),
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
let timer = null;
let timerId = null;
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
      refs.start.removeAttribute("disabled", "disabled");
  timer = selectedDates[0]
  return timer
    }
    Notify.failure("Please choose a date in the future");
  }

function onTimerMarkup({days, hours, minutes, seconds}) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);

}
refs.start.addEventListener('click', () => {
  if (timerId) {
    return
  }
 timerId = setInterval(() => onTimerStart(), 1000);

})
function onTimerStart() {
  let timeForTimer = timer - new Date();;
  let timeForMurkup = convertMs(timeForTimer)

  onTimerMarkup(timeForMurkup);
}
  
function addLeadingZero(value) {
  return String(value).padStart(2, 0)
}
Notify.init({
  timeout: 2000,
  clickToClose: true,
});