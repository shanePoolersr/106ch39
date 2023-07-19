function sayHello(name, lastName) {
  console.log("Hello" + name + " " + lastName);
  var color = "blue";
}

function sum(num1, num2) {
  const res = num1 + num2;
  return res;
  console.log("WILL NEVER BE CALLED");
}

function saveSomething(data) {
  if (!data.userName) {
    alert("user Name is required");
    return; //<!-Do not continue in this function
  }

  // send to server to be saved
}

function printNumbers() {
  // print numbers from 1 to 20
  // except 7 and 13
  for (let i = 1; i <= 20; i++) {
    if (i != 7 && i != 13) {
      console.log(i);
    }
  }
}

/*
 *  ! =not
 * && = and
 * || = or
 */

function basicCalculations() {
  let numbers = [
    12, 4, 123, 4567, 234, 56, 12, 87, 124, 865, 233, 788, 43, 91, 544, 782,
    653, 845,
  ];
  /**
   *  1 -print every number
   *  2 -print the sum of all numbers
   *  3 - print how many numbers are there greater than 500
   */
  let sum = 0;
  let count = 0;
  for (let i = 0; i < Number.length; i++) {
    let num = numbers[i];
    console.log(num);
    // sum =sum +num;
    sum += num;
    if (num > 500) {
      count += 1;
    }
  }
  console.log("The total is: " + sum); // 10063
  console.log("There are" + count + " numbers greater than 600"); //7
}

function init() {
  console.log("Hello world");
  const X = "Shane";
  sayHello("X", "Pooler");
  sayHello("Jack", "Black");

  const result = sum(21, 21);
  console.log(result);

  printNumbers();
  basicCalculations();
}
window.onload = init;
