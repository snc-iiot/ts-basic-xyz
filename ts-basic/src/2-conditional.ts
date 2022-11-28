let number: number = 100;

// if (number > 0) console.log("> 0");
// if (number >= 5) console.log(">= 5");
// if (number <= 0) console.log("<= 0");

// if (number > 0) console.log("> 0");
// else if (number >= 5) console.log(">= 5");
// else if (number <= 0) console.log("<= 0");
// else console.log("else");

// number > 0 && console.log("> 0");
number > 0
  ? console.log("> 0")
  : number >= 5
  ? console.log(">= 5")
  : number <= 0
  ? console.log("<= 0")
  : console.log("else");
