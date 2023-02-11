// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

readBooks(10000, books[0], (sisaWaktu)=>{
    readBooks(sisaWaktu, books[1], (sisaWaktu1)=>{
        readBooks(sisaWaktu1, books[2], (sisaWaktu2)=>{
            readBooks(sisaWaktu2, books[3], (sisaWaktu3)=>{
                return sisaWaktu3;
            })
        })
    })
})