// Chapter 2: Program Structure

// Looping a Triangle
// Write a loop that makes seven calls to console.log to output the following triangle: 
// #
// ##
// ###
// ####
// #####
// ######
// #######
const loopTriangle = () => {
  for (let symbol = '#'; symbol.length<8; symbol += '#'){
    console.log(symbol); 
  }
}
// console.log(loopTriangle());

// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

const FizzBuzz = () => {
  for (let i = 1; i<=100; i++){
    if (i%5===0 && i%3===0){
      console.log("FizzBuzz");
      continue;
    }
    if (i%5===0 && i%3!==0){
      console.log("Buzz");
      continue;
    } 
    else if (i%3===0){
      console.log("Fizz");
      continue;
    } 
    else {
      console.log(i);
    }
  }
}
// console.log(FizzBuzz()); 

// Chessboard
// Write a program that creates a string that represents an 8x8 grid using new-line characters to separate lines. At each position of the grid there is either a space or a # character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

/* 
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
*/

// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. 

const Chessboard = () => {
  const width = 4;
  const height = 8; 
  
  for (let i = 0; i < height; i++) {
    if (i%2 === 0){
      console.log('# # # # ');
    }
    else {
      console.log(' # # # #')
    }
  }
}
console.log(Chessboard()); 