//! 1. return value
//! 2. not return value

//! not return value
function sayHello1() {
  console.log("Hello World");
}

function sayHello2(name: string) {
  console.log("Hello " + name);
}

const sayHello3 = function () {
  console.log("Hello World");
};

const sayHello4 = () => console.log("Hello World");

sayHello1();
sayHello2("AAA");
sayHello3();
sayHello4();

//! return value
function power(x: number, y: number) {
  return x ** y;
}

const power2 = ({ x, y }: { x: number; y: number }) => x ** y;

const test = power(2, 3);
const test2 = power2({ x: 2, y: 3 });
