// const square = function(x) {
//     return x * x
// };

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(8));


// const getFirstName = (full) => {
//     return full.split(" ")[0];
// }

const getFirstName = (full) => full.split(" ")[0];


const fullName = 'Adam Stomberg';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0]
    console.log(getFirstName(fullName));
}

