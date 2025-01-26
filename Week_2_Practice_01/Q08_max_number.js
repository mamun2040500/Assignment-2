var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var result = numbers[0]

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (result < numbers[index]) {
        result = numbers[index];
    }
}

console.log(result);
