// Напишем функцию, которая будет принимать число n и возвращать
// сумму квадратов от 1 до n: 1^2 + 2^2 + 3^2 + ... + n^2.

// iterative
function sumOfSquares(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 2;
  }
  return sum;
}

function sumOfSquaresArray(n) {
  const values = [];
  for (let i = 1; i <= n; i++) {
    values.push(i ** 2);
  }
  const sum = values.reduce((acc, num) => acc + num, 0);
  return sum;
}

// console.time();
// console.log(sumOfSquares(6)); // 1 + 4 + 9 + 16
// console.timeEnd();

// sum(4): 1 + 4 + 9 + 16
// sum(5): sum(4) + 25
// sum(6) = sum(5) + 36

// recursive
function sumOfSquaresRecursive(n) {
  if (n <= 1) return 1;
  return sumOfSquaresRecursive(n - 1) + n ** 2;
}

// console.time();
// console.log(sumOfSquaresRecursive(5));
// console.timeEnd();

function unlinkTxtRecursive(initPath) {

}

unlinkTxtRecursive('./start');
