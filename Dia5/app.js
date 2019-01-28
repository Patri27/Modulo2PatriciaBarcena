/*
 * Aquí podéis hacer los ejercicios ya
 * practicar Javascript!
 */

console.log("Probando, probando, 1, 2, 3!");

//1
/*
const user = {
    name: "John",
    surname: "Smith"
}

user.name = "Pete";
delete user.name;
*/

//2
/*
let schedule = {};

const isEmpty = obj => {
  for (let key in obj) {
    return console.log(false);
  }
  return console.log(true);
};

isEmpty(schedule);
*/

//3
/* 
Yes, it's possible to change its properties, but you can't reasign user.
*/

//4
/*
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);
*/

//5
/*
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

for (let key in menu) {
  typeof menu[key] == "number" ? (menu[key] *= 2) : menu[key];
}

console.log(menu);
*/

//6
/*Crear un objeto con al menos una propiedad name. Crear una función que al 
pasarle el objeto ponga la priemra letra de la propiedad name en mayúscula 
si es mayor de 3 */

let user = {
  age: 24,
  name: "patri"
};

const capitalize = obj => {
  console.log(obj.name.lenght);
  if (obj.name.lenght > 3) {
    console.log("loquesea", obj.name.charAt(0));
    return (obj[name] =
      obj.name.charAt(0).toUppercase() + obj.name.substring(1));
  } else {
    return obj.name;
  }
};

capitalize(user);

console.log(user);
