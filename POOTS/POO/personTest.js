let myLib = require("./person");


let personaObjeto =new myLib.Person("will",180,60);
console.log("nombre mostrado " + personaObjeto.name);
console.log(personaObjeto.height);
console.log(personaObjeto.weight);
console.log(personaObjeto.calcIMC());
console.log(personaObjeto.calcAge());
console.log(personaObjeto.printAll());
console.log(personaObjeto.printHobbies());
