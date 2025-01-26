
const Leap_Year = (year) => {
    if (year % 400 == 0) {
        console.log("Leap Year");
    }
    else if (year % 100 != 0 && year% 4 == 0) {
        console.log("Leap Year");
    }
    else {
        console.log("Not Leap Year");
    }
}

Leap_Year(1896);
Leap_Year(1900);
Leap_Year(1904);
Leap_Year(1996);
Leap_Year(2000);
Leap_Year(2024);
Leap_Year(2025);
