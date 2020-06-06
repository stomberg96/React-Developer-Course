var nameVar = 'adam';
var nameVar = 'mike';
console.log('namevar', nameVar);

let nameLet =  'jen';
nameLet = 'juls';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(){
    const petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

const fullName = 'Adam Stomberg';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName);
}

console.log(firstName);