// let d = new Date();
// // d.setFullYear(2008);
// // d.setMonth(5);
// // d.setDate(12);
// d.setHours(4);
// d.setMinutes(43);
// d.setMilliseconds(324);

// // console.log(d);
// console.log(d);



// [1,2,34].push(3);
// console.log("hello");

// function myFunction(){
//     console.log("Hello World");
//     console.log("I Love Javasript");
// }
//  myFunction();
//  myFunction();


// function myFunction(a,b){
//     console.log(a+b);
// }
// myFunction(4,7);
// myFunction(12,45);
// myFunction(12,"Hello");


// function sum(x,y){
//     s = x + y;
//     console.log("before");
//     return s
//     console.log("after");
// }
// let value = sum(67,89)
// console.log(value);


// function tellTime(){
//     var now = new Date();
//     var theDay = now.getDay();
//     var theHr = now.getHours();
//     var theMin = now.getMinutes();

//     alert("Current time: "+ theHr + ":" + theMin + ":" + theDay);
// }
// tellTime()

// function multiplication(p1,p2){
//     return p1 * p2
// }
// console.log(multiplication(5,8));


// convert fahrenheit to celsius

// function fahrenheitToCelsius(fahrenheit){
//     return (5/9) * (fahrenheit-32);
// }
// console.log(fahrenheitToCelsius(77));


// function square(a){
//     return a * a;
// }
// console.log(square(6));
// console.log(square(13));


function factorial(n){
    if (n===0 || n === 1){
        return 1;  
    } else {
        return n * factorial(n - 1)
    }
}
console.log(factorial(7));