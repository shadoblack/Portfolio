import {Vector} from "./vector"

let vector1 = new Vector(7,8);
let vector2 = new Vector(5,4);

console.log(vector1);
console.log(vector2);

console.log(vector1.add(vector2));

console.log(vector1.subs(vector2));

console.log(vector1.mult(vector2));

console.log(vector1.multNumber(2));