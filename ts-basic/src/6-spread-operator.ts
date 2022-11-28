//! 1. Array
{
  const numbers: number[] = [1, 2, 3];

  const numbers2: number[] = [-1, 0, ...numbers, 4, 5, 6];
  console.log(numbers);
  console.log(numbers2);

  const numbers3: number[] = [...numbers, ...numbers2];
  console.log(numbers3);
}

//! 2. Object
{
  interface Person {
    name: string;
    age: number;
    company?: {
      name: string;
      address: string;
    };
  }

  const data: Person = {
    name: "John",
    age: 30,
    company: {
      name: "SNC",
      address: "Rayong, Thailand",
    },
  };

  const data2 = { ...data, name: "Jane" };

  //   console.log(data);
  //   console.log(data2);
}

//! 3. Function
{
  function averageOfNumber(x: number, y: number, ...numbers: number[]) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
  }

  console.log(averageOfNumber(1, 2, 3, 4, 5));
  console.log(averageOfNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
}
