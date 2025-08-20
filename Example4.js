let today = new Date();
console.log("Date:",today);

let students = ["Sirisha","Chaitu","Vishali"];
// students.push("Nandhan");
// console.log (students)
// students.unshift("Akshaya");
// console.log(students)
// students.splice(2,1,"Parnika");
// console.log(students)
// students.pop("Lekhana")
// console.log(students)

// for (let student of students){
//   console.log(student);
// }

// 

// let floor = 1;
// do{
//   console.log("Hostel Floor:",floor);
//   floor++;
// }while(floor <=3);

// console.log("Round 4.7:", Math.round(4.7));    // 5
// console.log("Round 4.3:", Math.round(4.3));    // 4
// console.log("Ceil 4.1:", Math.ceil(4.1));      // 5
// console.log("Floor 4.9:", Math.floor(4.9));    // 4
// console.log("Truncate 4.9:", Math.trunc(4.9)); // 4
// console.log("Absolute of -25:", Math.abs(-25)); // 25
// console.log("2^3:", Math.pow(2, 3));           // 8
// console.log("Square root of 49:", Math.sqrt(49)); // 7

let studentMap = new Map();
studentMap.set("101",{name:"lekhana",dept:"cse"});
studentMap.set("102",{name:"Raj",dept:"mech"});
studentMap.set("103",{name:"nandhan",dept:"ece"});
console.log("Student 102:",studentMap.get("102"));