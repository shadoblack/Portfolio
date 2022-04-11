import {Library} from "./library"
import { Book } from "./book"

let bookTest =new Book("Introducción a Javascript",233,"2344433-BC23333","Joseph Smith","Now Editions")
let bookTest2 =new Book("Introducción a Javascript",233,"2344433-BC23333","Joseph Smith","Now Editions")


let libraryTest = new Library([bookTest,bookTest2],"c/Appallacchia, núm. 66, 5º 2ª","Amadeus Mozart")

console.log(libraryTest.toString());
console.log(libraryTest.getNumberOfBooks());
console.log(libraryTest.findByAuthor("Joseph"));