import {Person} from "./person"

let character1 = new Person("Joe",30,"c/Eiffel,num.23, 2º 4ª");
character1.printName();
console.log(character1.yearOfBirth(2022));
//lo pongo por console para que se muestre que es null
console.log(character1.setAddress("c/Amsterdam,num.45, 1º 1ª"));
console.log(character1.getAddress());
