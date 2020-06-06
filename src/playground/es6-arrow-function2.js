const add = (a, b) => {
    return a + b;
}

console.log(add(1, 2));

const user = {
    name: 'Adam',
    cities: ['West Greenwich', 'Providence'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());


const multiplier = {
    nums: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.nums.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());