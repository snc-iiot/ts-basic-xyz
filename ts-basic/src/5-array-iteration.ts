//! .forEach(), .map(), .filter(), .reduce(), .find(), .every(), .some()
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//! 1 Array.forEach(value, index, array) => void
// numbers.forEach(console.log);

//! 2 Array.map(value, index, array) => any[]
// const test3 = (x: number) => (x % 2 === 0 ? x * 2 : x ** 2);
// const test3 = (x: number) => x.toFixed(2);
// const numbers2 = numbers.map(test3);
// console.log(numbers2);

//! 3 Array.filter(value, index, array) => any[]
// const numbers4 = numbers.filter((x) => x % 2 === 0);
// console.log(numbers4);

//! 4 Array.find(value, index, array) => any
// const numbers5 = numbers.find((x) => x % 2 === 0);
// console.log(numbers5);

//! 5 Array.every(value, index, array) => boolean
// const numbers6 = numbers.every((x) => x % 2 === 0);
// console.log(numbers6);

//! 6 Array.some(value, index, array) => boolean
// const numbers7 = numbers.some((x) => x % 2 === 0);
// console.log(numbers7);

//! 7 Array.reduce((pre, value, index, array) => any, initialValue) => any
// const sumNumber = numbers.reduce((acc, cur) => acc + cur, 0);
// console.log(sumNumber / numbers.length);

const keys: string[] = ["id", "name"];
const ids: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["a", "b", "c", "d", "e"];

// const users = ids.map((id, index) => ({ id, name: names[index] }));
const users = ids.reduce((acc, id, index) => {
  [...acc, { id, name: names[index] }];
  return acc;
}, []);

console.log(users);
