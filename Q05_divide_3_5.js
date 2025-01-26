let div_3_5 = [];

for (let index = 1; index < 51; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
        div_3_5.push(index);
    }
}
console.log(div_3_5);
