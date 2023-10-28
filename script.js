

let name = "dasthu";
let age = 23;
let gender = true;
let score = 5.6;
let marks = [20,30,30,40];
 marks.push(50);
console.log(name);

console.log( typeof name , typeof age, typeof gender, typeof marks, marks.length )

marks.reverse();
console.log(marks);

// for(let i=0; i < marks.length; i++){
//       console.log(marks[i]);
// }
for( let i of marks){
    console.log(i);
}   


