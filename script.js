var s = '\n';

for (var i = 0; i <= 5; i++) {

    for (var k = 0; k < 5 - i; k++) {
        s += ' ';
    }


    for (var j = 0; j <= i; j++) {
       
        s += '*';
    }
    
     for (var j = 1; j <= i; j++) {
       
        s += '*';
    }
    s += '\n';
}

for (var i = 4; i >= 0 ; i--) {

    
    for (var k = 0; k < 5 - i; k++) {
        s += ' ';
    }


    for (var j = 0; j <= i; j++) {
       
        s += '*';
    }
    
     for (var j = 1; j <= i; j++) {
       
        s += '*';
    }
    s += '\n';
}

console.log(s);










