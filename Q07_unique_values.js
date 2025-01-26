var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var result = {}
var res = []

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (result[element]) {
        result[element]++;
    }
    else{
        result[element] = 1;
        res.push(element);
    }
}

console.log(...numbers);
console.log(...res);
