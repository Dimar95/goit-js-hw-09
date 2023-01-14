import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({
  timeout: 2000,
  clickToClose: true,
});
const refForm = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
}

refForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const {elements: { delay, step, amount }} = e.currentTarget;

  let delayPromise = Number(delay.value);
  const stepPromise = Number(step.value);

  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, delayPromise).then(result => {
    const {position, delay} = result
    Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`)
  }).catch((error) => {
    const {position, delay} = error
    Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`)
  })
  delayPromise += stepPromise;
}});
