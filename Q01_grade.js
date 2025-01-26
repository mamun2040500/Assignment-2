
const grade = (mark) => {
    if (mark < 33) {
        console.log('F');
    }
    else if (mark < 40) {
        console.log('D');
    }
    else if (mark < 50) {
        console.log('C');
    }
    else if (mark < 60) {
        console.log('B');
    }
    else if (mark < 70) {
        console.log('A-');
    }
    else if (mark < 80) {
        console.log('A');
    }
    else {
        console.log('A+');
    }
};

grade (20);
grade (30);
grade (36);
grade (44);
grade (55);
grade (66);
grade (77);
grade (88);