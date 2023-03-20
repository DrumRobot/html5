const array = new Array(500000).fill(0);
let x = 0;

console.time("for-i-time");
for (let i = 0; i < array.length; i++) {
  x += array[i];
}
console.timeEnd("for-i-time");

console.time("for-of-time");
for (const c of array) {
  x += c;
}
console.timeEnd("for-of-time");

console.time("forEach-time");
array.reduce((acc, cur) => acc += cur);
console.timeEnd("forEach-time");
