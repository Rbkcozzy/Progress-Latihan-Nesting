var s = '\n';

// Segitiga naik (refleksi Y)
for (var i = 0; i <= 5; i++) {

    
    // Tambahkan spasi di depan
    for (var k = 0; k < 5 - i; k++) {
        s += '-';
    }


    for (var j = 0; j <= i; j++) {
       
        s += '*';
    }

    s += '\n';
}



console.log(s);










