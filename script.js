var rows = 6;
var pascal = [];

// Membuat segitiga Pascal
for (var i = 0; i < rows; i++) {
    pascal[i] = [];
    for (var j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
            pascal[i][j] = 1;
        } else {
            pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
        }
    }
}

// Menampilkan segitiga Pascal
var s = '';
for (var i = 0; i < rows; i++) {
    // Menambah spasi agar segitiga rata tengah
    for (var k = 0; k < rows - i - 1; k++) {
        s += ' ';
    }
    for (var j = 0; j <= i; j++) {
        s += pascal[i][j] + ' ';
    }
    s += '\n';
}

console.log(s);










