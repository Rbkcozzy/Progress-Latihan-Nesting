var s = '';

for (var i = 0; i <= 6 ; i++) 

{   if (i % 2 === 0) {
        s += ' ';
    }
    

    for (var k = 1; k <= 6; k++) {
        s += ' #';
    }

    s += '\n';
}

console.log(s);










