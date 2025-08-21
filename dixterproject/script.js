const output = document.getElementById("output");
function log(message) {
  console.log(message);
  output.textContent += message + "\n";
}

let userName = prompt("Enter your name:");
let userNumber = Number(prompt("Enter a number:"));

const BASE_NUMBER = 10;

let sum = BASE_NUMBER + userNumber;
let diff = BASE_NUMBER - userNumber;
let prod = BASE_NUMBER * userNumber;
let quot = BASE_NUMBER / userNumber;

log(`👋 Hello, ${userName}!`);
log(`Base Number = ${BASE_NUMBER}, Your Number = ${userNumber}`);
log(`➕ Sum = ${sum}`);
log(`➖ Difference = ${diff}`);
log(`✖️ Product = ${prod}`);
log(`➗ Quotient = ${quot}`);

let sentence = prompt("Enter a short sentence:");
log(`UPPERCASE: ${sentence.toUpperCase()}`);
log(`lowercase: ${sentence.toLowerCase()}`);

if (userNumber >= 0) {
  log(`(If) Your number is positive ✅`);
} else {
  log(`(If) Your number is negative ❌`);
}

let check = (userNumber >= 0) ? "positive ✅" : "negative ❌";
log(`(Ternary) Your number is ${check}`);

log(`For Loop → Numbers from 1 to ${userNumber}:`);
for (let i = 1; i <= userNumber; i++) {
  log(i);
}

log("While Loop → Countdown from 5:");
let count = 5;
while (count > 0) {
  log(count);
  count--;
}

function greetUser(name) {
  return `🙌 Hello, ${name}!`;
}
log(greetUser(userName));

let fruits = [];
for (let i = 1; i <= 3; i++) {
  let fruit = prompt(`Enter favorite fruit #${i}:`);
  fruits.push(fruit);
}
log("🍎 Your favorite fruits: " + fruits.join(", "));
