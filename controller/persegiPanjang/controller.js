const hasilLuas = require('./luasPersegiPanjang');
const hasilKeliling = require('./kelilingPersegiPanjang');
const historyHit = require('../../model/history')

function hasilHitung(request, response){

    const data = request.body;
    const keliling = hasilKeliling(request);
    const luas = hasilLuas(request);

    historyHit.push({
        "Bangun Datar": "Persegi panjang",
        Panjang : data.panjang,
        Lebar : data.lebar,
        Keliling : keliling,
        Luas : luas
    })

    response.send(`Keliling = ${keliling} dan Luas = ${luas} `);
}

module.exports = hasilHitung;