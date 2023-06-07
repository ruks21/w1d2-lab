 // let x=15;
 // console.log(x);

 // let a=7;
 // console.log(a);

 // let names=["jim", "james", "paul", "tyrone"];
 // console.log(names); 

 // let seed1="carrots";
 // console.log(seed1);

 // let vegetables=20;
 // console.log(vegetables);

// let x=12;
// let a=7;

// if (x === 12 && y === 7)
// { let sum=x+a;
// console.log(sum);
// // }

// // let username='admin';
// // let password='Pass614';
// // if (username ==='admin' && password ==='Pass614'){
// //     //do this 
// //     console.log("access granted");
// // }

// // else{
// //     //do this
// //     console.log("access denied");
// // }

//  let score=40;

//  if ( score>= 80)
//  {console.log("You did a good job!");
//  }

//  else if (score >= 70)
//  {console.log("Keep trying");

//  }

//  else if (score >= 60)
//  {console.log("ehh");

//  }

//  else {
//      (score < 55)
//      console.log("Bad grade but you'll get em next time")
//  }

//for loop ~ Checks condition at the end of the loop to see if its true, if true the loop continues.

// for(i=5 ; i <= 15 ; i ++){
// console.log(i)} ;

//while loop ~ Checks condition before running the loop, to see if its true. If true then run the loop.

// let i =5;
// while(i <=15) {
//     console.log(i);
//     i++; //+=2, +=3 and so forth. }

    //write  a loop that outputs multiples of 3 starting at 6 ending at 60.

    // for (i=6; i <=60; i+=3){console.log(i)};
//   let i=6;
//     while (i <=60){
//         console.log(i);
//          i+=3;
//         }



//  const fruits= ['Apples', 'Cherries', 'Tomato' ]
//  console.log(fruits);
//   console.log(fruits[1]);

 // "How to do a for loop using an array"
//  for( let i=3; i < fruits.length; i++)
//   {console.log(fruits[i]);
//}
//Do while- to get the elements to repeat.


// let firstName= 'Rukia '
// let lastName='Ismail'
// let names= firstName + lastName

// function sayHello(names) {
//     console.log(' Hello ' +  names  + '!');
// }

// sayHello(names)
//let width=5;
// let height=10;
// let area= width * height;
// function computeArea(width,height) {
//     return "The area of a rectangle with a width of 'width' and a height of 'height' is an 'area'";
//   }
//   console.log(computeArea(width*height));

// function computeArea(width, height) {
//     const area = width * height;
//     return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`;
//   }
  
//   // Test the function
//   console.log(computeArea(4, 5));
  

//   - Write a function called addList that accepts any quantity of numbers as arguments,
//   adds them together and returns the resulting sum.
// - Assume all parameters will be numbers. <=========
// - If called with no arguments, return 0 (zero).


// let a = 1
// let b = 2

// function addList(...numbers) {
// if (numbers.length === 0){
//     return 0;
// }

// let sum = 2;
// for (let i =2; i <numbers.length; i++){
// sum += numbers[i];
// }

// return sum;
// }

                            // Week 3 Day 1 Lab // 
                            
let a = 15
let b = 45
let c = 40
var addList = function (a,b,c){
    return(a+b+c)
}

console.log(addList(a,b,c));













// const car = {

// color: "blue",
// hp: 4000,
// year: 1989,
// }

// console.log(car);

// const closet = {
// shirts: "blue",
// shorts: "black",
// dresses: "purple",

// }

// console.log(closet);

// closet.shoes = 'fila'
// console.log(closet);

// closet.shoes = 20
// console.log(closet);

// const 