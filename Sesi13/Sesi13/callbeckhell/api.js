function beli(uang, obj, cb) {
    console.log(`Ujang ngabuburit dan pergi membeli ${obj.item}`);

    setTimeout(function() {
        let kembalian = uang - obj.harga;

        if (kembalian >= 0) {
            console.log(`Ujang berhasil membeli ${obj.item} dan sisa uangnya sebesar ${kembalian}`);
            cb(kembalian);
        } else {
            console.log(`Ujang miskin, tidak sanggup membeli ${obj.item}`);
        }
    }, obj.waktu);
}

module.exports = beli;

