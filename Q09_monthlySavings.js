
const monthlySavings =(array, num) => {
    let s = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element >= 3000) {
            s += element * 80 / 100;
        }
        else {
            s += element;
        }
    }
    s = s - num;
    if (Array.isArray(array)) {
        if (s < 0) {
            console.log("earn more");
        }
        else {
            console.log(s);
        }
    }
    else {
        console.log("invalid input");
    }
}

monthlySavings([1000,2000,3000], 5400);
monthlySavings([1000,2000,2500], 5000);
monthlySavings([900,2700,3400], 10000);
monthlySavings(100, [900,2700,3400]);
