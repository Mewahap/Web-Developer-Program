// function sayHello(params, cb) {
//     console.log("Hello, my name is " + params);
//     cb();
// }

// function greetings() {
//     console.log("Nice to meet you");
// }

// sayHello("Adi", greetings);

// function add(num1, num2, cb) {
//     let result = num1 + num2;

//     if (cb) {
//         result = cb(result);
//     }

//     console.log(result);
// }

// add(20000, 3000);
// add(20000, 3000, (result) => `Rp. ${result}`);
// add(20000, 3000, (result) => `$ ${result}`);


// function f1() {
//     setTimeout(
//         () => {
//             console.log("function 1");
//         }, 2100
//     )
// }
// function f2() {
//     setTimeout(
//         () => {
//             console.log("function 2");
//         }, 2000
//     )
// }
// function f3() {
//     console.log("function 3");
// }

// f1();
// f2();
// f3();