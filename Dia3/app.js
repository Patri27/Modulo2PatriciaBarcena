/*
 * Aquí podéis hacer los ejercicios ya
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

//1
/*
El último valor es 1.
*/

//2
/*
1. El alert es de 1 a 4 porque el bucle se para en i = 5, y el incremento lo hace antes de la comparación.
2. El alert es de 1 a 5 porque el incremento lo hace después de la comparación.
*/

//3
/*
En ambos casos muestra hasta 4 porque el bucle se para en cuanto i llega a 5.
*/

//4
/*
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}
*/

//5
/*
let i = 0;

while (i < 3) {
  alert(`number ${i}!`);
  i++;
}
*/

//6
/*
let num;

do {
  num = +prompt("Dame un número");
} while (num <= 100 && num);
*/

//7
/*
let num = +prompt("Dame un límite");

outer: for (let i = 2; i <= num; i++) {
  for (let x = 2; x < i; x++) {
    if (i % x == 0) {
      continue outer;
    }
  }
  alert(i);
}
*/

//8
/*
let browser;

if (browser == "Edge") {
  alert("You've git the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}
*/

//9
/*
let a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
}
*/

//10
/*
Funcionan igual
*/

//11
/* 1.
let age = prompt("What's your age?");

function checkAge(age) {
  return age >= 18
    ? true
    : confirm("Do you have your parents permission to access this page?");
}

checkAge(age);
*/

/* 2.
let age = prompt("What's your age?");

function checkAge(age) {
  return (
    age >= 18 ||
    confirm("Do you have your parents permission to access this page?")
  );
}

checkAge(age);
*/

//12
/*
function checkMin(a, b) {
  return a > b ? console.log(b) : console.log(a);
}

checkMin(1, 3);
checkMin(-1, 1);
*/

//13
/*
function pow(x, n) {
  let result = x;
  for (i = 1; i < n; i++) {
    result *= x;
  }
  return console.log(x + " elevado a " + n + " es " + result);
}

let a = +prompt("Give me a number.");
let b = +prompt("Give me another number.");

b > 0 ? pow(a, b) : alert("Please write a positive number.");
*/

//14

const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
