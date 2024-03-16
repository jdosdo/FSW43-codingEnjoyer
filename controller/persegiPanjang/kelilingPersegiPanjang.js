function hitungKelilingPersegiPanjang(request, response){
    // DECLARE VARIABLE
    const data = request.body
    const panjang = data.panjang;
    const lebar = data.lebar;

    const keliling = 2 * panjang + 2 * lebar;
    return keliling;
}

module.exports = hitungKelilingPersegiPanjang;