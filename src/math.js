// Einfache Helfer-Funktionen, die von der Test-Pipeline geprüft werden.

export function sum(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("sum expects an array of numbers");
  }
  return numbers.reduce((acc, n) => acc + n, 0);
}

export function isEven(n) {
  if (!Number.isInteger(n)) {
    throw new TypeError("isEven expects an integer");
  }
  return n % 2 === 0;
}
