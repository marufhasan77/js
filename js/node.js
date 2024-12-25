const numbers = [2, 3, 43, 3, 54, 76, 7, 8, 70, 70, 6, 33, 24, 12, 65, 46, 5];

function oddAverage(numbers) {
  for (const number of numbers) {
    if (number % 2 === 1) {
      console.log(number);
    }
  }
}
const avg = oddAverage(numbers)