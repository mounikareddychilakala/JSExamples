// const readline =require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// }

// );
// rl.question("Enter a number:",function(answer){
//   const number = parseInt(answer);
//   if(number>0){
//     console.log("The number is positive");
//   }else if (number === 0){
//     console.log("The number is zero");
//   }else{
//     comsole.log("The number is negetive");
//   }
//   rl.close();
// });
const number = parseInt(prompt("Enter a number: "));
if (number > 0) {
    console.log("The number is positive");
}
else if (number == 0) {
  console.log("The number is zero");
}
else {
     console.log("The number is negative");
}