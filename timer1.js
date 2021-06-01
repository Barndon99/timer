// accept any number of timers as arguments
let timers = process.argv.slice(2);
if (timers.length !== 0) {
  for (const time of timers) {
    if (time > 0) {
      setTimeout(() => {process.stdout.write('\x07');
      }, time * 1000)
    }
  }
};
console.log(timers);