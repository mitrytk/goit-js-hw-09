import Notiflix from 'notiflix';
const refs = {
  delayFeldEl: document.querySelector('input[name="delay"]'),
  stepFeldEl: document.querySelector('input[name="step"]'),
  amountFeldEl: document.querySelector('input[name="amount"]'),
  createBtEl: document.querySelector('.form > button[type="submit"]'),
}
refs.createBtEl.addEventListener('click', onCreateClick);

function onCreateClick(evt) {
  evt.preventDefault();
  const amount = Number(refs.amountFeldEl.value); 
  const delay = Number(refs.stepFeldEl.value);
  const firstDelay = Number(refs.delayFeldEl.value);

  let position = 1;

  setTimeout(() => {
    if (amount !== 0) {
      createPromise(position, delay)
        .then(({ position, delay }) => {
          // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        })

      setInterval(() => {
        if (position <= amount - 1) {
          createPromise(position, delay)
          .then(({ position, delay }) => {
            // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          })
          .catch(({ position, delay }) => {
            // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          })
          position += 1;
        }
      }, delay)
    }
  }, firstDelay);
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  })
}

