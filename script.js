function delayedPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
}

const promises = [
  delayedPromise(3000),
  delayedPromise(1500),
  delayedPromise(2500),
  delayedPromise(1000),
  delayedPromise(2000),
];

Promise.all(promises).then((results) => {
  console.log('результати всіх промісів:', results);
});


function randomDelay(value) {
  const delay = Math.floor(Math.random() * 4000) + 1000; 
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
}

const racePromises = [
  randomDelay('A'),
  randomDelay('B'),
  randomDelay('C'),

];

Promise.race(racePromises).then((fastest) => {
  console.log('найшвидший результат:', fastest);
});
