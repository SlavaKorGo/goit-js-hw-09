import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const form = document.querySelector('.form')

form.addEventListener('submit', onSubmitForm)


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise ((resolve, reject) =>{
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve ({position, delay});
      } else {
        // Reject
        reject ({position, delay});
      }
    }, delay);
  });
}

function onSubmitForm (e) {
  e.preventDefault();

  const {
    elements: {delay: delayRef, step: stepRef, amount: amountRef},
  } = form; 

  let position = 1;
  let delay = Number(delayRef.velue);
  const amount = Number(amountRef.velue);
  while (position <= amount) {
    createPromise(position, delay).then(({ position, delay }) => {
      Notiflix.Notify.success
      (`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.success
      (`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delay += Number(stepRef.value);
    position +=1;
  }
  
}

