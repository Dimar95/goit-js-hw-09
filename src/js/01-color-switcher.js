const refs = {
    start: document.querySelector('[data-start]'),
    stop: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
}
timerId = null;
refs.start.addEventListener('click', () => onBackgroundColorStart());
refs.stop.addEventListener('click', () => onBackgroundColorStop());

function onBackgroundColorStart() {
    refs.start.setAttribute("disabled", "disabled")
    timerId = setInterval(() => refs.body.style.backgroundColor = `${getRandomHexColor()}`, 1000)
}

function onBackgroundColorStop() {
    clearInterval(timerId)
    refs.start.removeAttribute("disabled", "disabled")

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}





