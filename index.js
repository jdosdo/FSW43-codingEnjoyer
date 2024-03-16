const express = require('express');
const PORT = 3556;
const listHistory = require('./model/history');
const path = require('path')

const app = express();
app.use(express.urlencoded());

// CONTROLLER
const persegiPanjang = require('./controller/persegiPanjang/controller')

// ROUTING
app.get('/persegi-panjang', function(request, response){
    response.status(200).sendFile(path.join(__dirname, "/view/index.html"))
})
app.post('/persegi-panjang', persegiPanjang)

app.get('/lihat-history', function(request, response){
    response.status(200).json({listHistory});
})

// RUNNING SERVER
app.listen(PORT, function(){
    console.log(`Server berjalan di localhost:${PORT}`)
});