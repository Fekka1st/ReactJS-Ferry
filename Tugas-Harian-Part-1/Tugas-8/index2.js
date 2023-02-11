//index2.js


var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]


    readBooksPromise(10000,books[0]).then(function(fulfilled){
        readBooksPromise(fulfilled,books[1]).then(function(fulfilled1){
            readBooksPromise(fulfilled1,books[2]).then(function(fulfilled2){
                return fulfilled2
            }).catch(function (error){
                console.log(error)
            })
        }).catch(function (error){
            console.log(error)
        })
    }).catch(function (error){
        console.log(error)
    })