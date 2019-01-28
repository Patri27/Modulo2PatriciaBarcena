/*
 * Aquí podéis hacer los ejercicios ya
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

//1
/*
Da un error porque no hay ; entra user y la llamada a la función
*/

//2
/* 
En el (3) y el (4) al reasignarlo pierde el this, por eso da undefined.
*/

//3
/*
Da undefined.
ref tiene acceso a la función, así que habría que añadirle paréntesis.

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
};

let user = makeUser();

alert( user.ref().name ); // John
*/

//4
/*
let calculator = {
  read() {
    this.num1 = +prompt("Give me a number.");
    this.num2 = +prompt("Give me another number.");
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  }
};

console.log(calculator.read());
console.log(calculator);

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
*/

//5
/*
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
  }
};

ladder
  .up()
  .up()
  .down()
  .showStep();
*/

//6
/* Crear un objeto que le pases una función de sayHi() y un parámetro con el nombre de a quién quieres saludar.*/
/*
function User(func, name) {
  this.name = name;
  this.sayHi = func;
}

let user = new User(function(name) {
  if (this.name.includes("a")) {
    return "Hi " + this.name;
  }
}, "patri");

console.log(user);
console.log(user.sayHi());
*/

//7
/*
let checkSpam = str => {
  let str2 = str.toLowerCase();
  //
  if (str2.includes("xxx") || str2.includes("viagra")) {
    return console.log(true);
  } else {
    return console.log(false);
  }
  //
  return console.log(str2.includes("viagra") || str2.includes("xxx"));
};


checkSpam("buy ViAgRA now");
checkSpam("free xxxxx");
checkSpam("innocent rabbit");
*/
//8
/*
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt("Give me the actual value of the accumulator.");
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accuconsole.log(!mulator.read();
console.log(accumulator.value);
*/

//9

class Clock {
  constructor(template) {
    this._template = template;
  }

  _render() {
    let date = new Date();
    let hours = date.getHours();

    if (hours < 10) hours = "0" + hours;
    let mins = date.getMinutes();

    if (mins < 10) mins = "0" + mins;
    let secs = date.getSeconds();

    if (secs < 10) secs = "0" + secs;
    let output = this._template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this._timer);
  }

  start() {
    this._render();
    this._timer = setInterval(() => this._render(), 1000);
  }
}

let clock = new Clock("h:m:s");
clock.start();

class ExtendedClock extends Clock {
  constructor(template, precision) {
    super(template);
    this.precision = precision;
  }

  start() {
    this._render();
    this._timer = setInterval(() => this._render(), this.precision);
  }
}

let lowResolutionClock = new ExtendedClock("h:m:s", 1000);
lowResolutionClock.start();
