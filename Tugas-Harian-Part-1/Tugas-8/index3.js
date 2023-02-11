var filterBooksPromise = require('./promise2.js')


const dataJohn = async() =>{
    let a = filterBooksPromise(true,40).then(res=>{
        console.log(res)})
    let b = await filterBooksPromise(false,250).then(res=>{
        console.log(res)})
    var c =  await filterBooksPromise(true,30).then(res=>{
        console.log(res)}).catch(error=>{
            console.log(error.message)
        })
        

}
dataJohn()
