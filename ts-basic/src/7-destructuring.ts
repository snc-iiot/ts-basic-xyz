//! 1 Array
{
  const numbers: number[] = [1, 2, 3, 4, 5, 6];

  const [a, , b, ...c] = numbers;
  console.log(a, b);
  console.log(c);
}

//! 2 Object
{
  const data = {
    name: "John",
    age: 30,
  };

  const { name: x } = data;
  console.log(x);
  console.log(data.name);

  type EventType = {
    target: {
      value: string;
    };
  };

  const event: EventType = {
    target: {
      value: "Test",
    },
  };
  const {
    target: { value: name2 },
  } = event;

  console.log(name2);
}
