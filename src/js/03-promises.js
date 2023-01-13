function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
const refForm = document.querySelector('.form');
const refDelay = refForm

refForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const {elements: { delay, step, amount }} = e.currentTarget;


  console.log(delay.value);
  console.log(step.value);
  console.log(amount.value);
  
  createPromise()});

