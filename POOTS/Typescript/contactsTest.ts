import {Person} from "./person";
import {contacts} from "./contacts";


let character2 = new Person("Joel",50,"c/Eisenho,num.80, 1º 2ª");
let character3 = new Person("Mike",24,"c/Justin,num.23, 3º 3ª");
let character4 = new Person("John",28,"c/Broke,num.654, 6º 1ª");
let character5 = new Person("Bruce",30,"c/Garand,num.98, 4º 4ª");

let contactsList1 = new contacts;
contactsList1.people=[character2,character3,character4,character5];


contactsList1.printCalendar();