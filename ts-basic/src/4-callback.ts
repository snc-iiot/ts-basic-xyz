// function mainFn(x: number, y: number, callback: (z: number) => void) {
//   const result = x + y;
//   callback(result);
// }

// function log(result: number) {
//   console.log("Result is: " + result);
// }

// mainFn(3, 6, log);

// const testFn = (x: number) => console.log(x + 5);
// mainFn(1, 2, testFn);
// mainFn(1, 2, console.log);

function main(name: string, callback: (x: string) => void) {
  console.log("Start...");
  callback(name);
}

main("Pong", (x) => console.log(x));
