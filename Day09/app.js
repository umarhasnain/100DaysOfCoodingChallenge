var user = +prompt("Enter No");
if (user === 2 || user === 4 || user === 6 || user === 8) {
  alert("Number is even");
} else if (user === 1 || user === 3 || user === 5 || user === 7 || user === 9) {
  alert("Number is Odd");
} else {
  alert("Not even nor odd");
}
//Simple Calculator
var num1 = Number(prompt("Enter the first number: "));
var num2 = Number(prompt("Enter the second number: "));
var operator = prompt("Enter the operator (+, -, *, /, %): ");
var result;
if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  result = num1 / num2;
} else if (operator === "%") {
  result = num1 % num2;
} else {
  document.write("Invalid operator");
}

document.write(`Result: ${result}`);
