const beli = require('./api.js');

const belanja = [
    {
        item: "Kolak",
        harga: "5000",
        waktu: 500
    },
    {
        item: "Gorengan",
        harga: "6000",
        waktu: 800
    },
    {
        item: "Odading",
        harga: "10000",
        waktu: 1000
    },
];

const uang = 21000;

beli(uang, belanja[0], (sisaUang) => {
    beli(sisaUang, belanja[1], (sisaUang) => {
        beli(sisaUang, belanja[2], () => {
            console.log("Ujang pulang dan bersiap untuk berbuka");
        })
    })
})