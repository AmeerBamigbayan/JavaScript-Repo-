console.log('Hello World');
         //alert('Heyyyyy');

         //This is a comment

var b = 'Ameer';
console.log(b);      

document.getElementById('text').innerHTML = 'Hi';

//var age = prompt('How old are you?');
//console.log(age);


//console.log(5 - 20);

var num1 = 10;
num1 = num1 - 1;
console.log(num1);

/*function greeting(){
    var name = prompt('What is your name?');
    var result = 'Hello ' + name;
    console.log(result); 
}

greeting();
*/

var num = 0;
while (num < 100){
    num += 1;
    console.log(num);
}

//Data Types
let yourAge = 18; //number
let yourName = 'Ameer'; //string
let name = {first: 'Ameer', last: 'Khan'}; //object
let truth = true; //boolean
let groceries = ['apple', 'banana', 'orange']; //array      
let random; //undefined
let nothing = null; //null


//Objects in JavaScript

let student = {
    firstName: 'Ameer',
    lastName: 'Bamigbayan',
    age: 25,
    height: '6ft',
};

console.log(student.firstName);
console.log(student.lastName);
console.log(student.age);
console.log(student.height);

var age = prompt('How old are you?');

if ( (age >= 18) && (age <= 25) ) {
    console.log('You are a teenager');
} else {
    console.log('You are not a teenager');
}