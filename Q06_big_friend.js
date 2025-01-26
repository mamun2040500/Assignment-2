var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

result = friends[0];

for (let index = 0; index < friends.length; index++) {
    a = result.length;
    b = friends[index].length;
    if (a < b) {
        result = friends[index];
    }
}

console.log(result);
