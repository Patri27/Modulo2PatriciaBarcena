/*
 * Aquí podéis hacer los ejercicios ya
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

//1
/*
It'll output 2.
*/

//2

//6
/*
let age = prompt("Dame tu edad.");
if (age >= 14 && age <= 90) {
  alert("Estás en el rango entre 14 y 90.");
}
*/

//7
/* 1
let age = prompt("Dame tu edad.");
if (!(age >= 14 && age <= 90)) {
  alert("No estás en el rango deseado");
}
*/

/* 2
let age = prompt("Dame tu edad.");
if (age < 14 || age > 90) {
  alert("No estás en el rango deseado");
}
*/

//8
/*
1. Sí
2. No
3. Sí
*/

//9

let userName = prompt("Login.");
let pwd;
/*
function cancel(str) {
  return str == null || str == "";
}*/

let cancel = str => str == null || str == "";

if (userName == "Admin") {
  do {
    pwd = prompt("Password?");
    if (pwd == "TheMaster") {
      alert("Welcome!");
    } else if (cancel(pwd)) {
      alert("Canceled.");
    } else {
      alert("Wrong password.");
    }
  } while (!(pwd == "TheMaster" || cancel(pwd)));
} else if (cancel(userName)) {
  alert("Canceled.");
} else {
  alert("I don't know you.");
}
