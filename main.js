console.log("");
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
console.log("");

console.log("//////////rectangle///////////////");
console.log("");

let l = 20;
let w = 4;
let area = l * w;
console.log(`The area of the rectangle is: ${area}`);

console.log("");
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
console.log("");

console.log("//////////Temperature///////////////");
console.log("");

let C = 48;
F = C * 1.8 + 32;
console.log("°C to °F : " + C + "°C is " + F + "°F");
console.log("");
let NewC = (F - 32) / 1.8;
console.log("°F to °C : " + F + "°F is " + NewC + "°C");

console.log("");
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
console.log("");

console.log("//////////hours to seconds///////////////");
console.log("");

let h = 2;
let s = h * 3600;
console.log(h + " hour = " + s + " seconds.");

console.log("");
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
console.log("");

console.log("//////////Leap year///////////////");
console.log("");

let y = 1945;

if ((y % 4 == 0 && y % 1 != 0) || y % 4 == 0) {
  console.log(`[${y}] leap year.`);
} else {
  console.log(`[${y}] not leap year.`);
}

console.log("");
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
console.log("");

console.log(
  "//////////Find the a number is present in given range///////////////"
);
console.log("");

let start = 11;
let end = 30;
let number = 40;

if (start <= number && number <= end) {
  console.log(`This number : ${number} is True.`);
} else {
  console.log(`This number : ${number} is Folse.`);
}

console.log("");
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
console.log("");

console.log("//////////Factorial numbers///////////////");
console.log("");

let num = 9;
let answer = 1;
if (num == 0 || num == 1) {
  answer = 1;
  console.log(`The fectorial of ${num} = ${answer}`);
} else if (num > 1) {
  for (let i = num; i >= 1; i--) {
    answer = answer * i;
  }
  console.log(`The fectorial of ${num} = ${answer}`);
}

console.log("");
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
console.log("");
