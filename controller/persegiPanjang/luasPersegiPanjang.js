function hitungLuasPersegiPanjang(request, require){
    // DECLARE VARIABLE
    const data = request.body;
    const panjang = data.panjang;
    const lebar = data.lebar;

    const luas = panjang * lebar;
    return luas;
}

module.exports = hitungLuasPersegiPanjang;