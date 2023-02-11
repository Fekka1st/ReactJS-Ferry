import React, { useState } from "react"
import './css/style.css' ;

var daftarBuah = [
    {nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
    {nama: "Manggis", hargaTotal: 350000, beratTotal: 10000},
    {nama: "Nangka", hargaTotal: 90000, beratTotal: 2000},
    {nama: "Durian", hargaTotal: 400000, beratTotal: 5000},
    {nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000}
  ]

const App = () => {
  const [buah, setbuah] = useState(daftarBuah)
  const [input,setinput]= useState({
    nama:"",
    hargaTotal:"",
    beratTotal:""
  })
  
  const [currentIndex, setCurrentIndex] = useState(-1)

  const handleDelete = (e) => {
    let index = parseInt(e.target.value)
    let deletedItem = buah[index]
    let newData = buah.filter((e) => {return e !== deletedItem})
    console.log(newData)
    setbuah(newData)
  }

 

  const handleChange = (e) =>{
    let value = e.target.value
    let nameOfInput = e.target.name
    console.log(nameOfInput)
    switch(nameOfInput){
      case "nama" :
        setinput({ ...input, nama : value})
        break;
      case "hargaTotal" :
        setinput({ ...input, hargaTotal : value})
        break;
      case "beratTotal" :
        setinput({ ...input, beratTotal : value})
        break;
      default :
        break;
    }
  }

 
  const handleSubmit =(e)=>{
    
    e.preventDefault()
    const {nama,hargaTotal,beratTotal}=input
    if(currentIndex===-1){
      setbuah([...buah,{nama,hargaTotal,beratTotal}])
    }else{
      buah[currentIndex]={nama,hargaTotal,beratTotal}
    }
    setinput({
      nama:"",
      hargaTotal:"",
      beratTotal:""
    })
  }

  const handleEdit = (e) => {
    let index = parseInt(e.target.value)
    let editValue = buah[index]
    setinput(editValue)
    setCurrentIndex(e.target.value)
  }

  return (
    <>
      <h1 className="head">Daftar Harga Buah</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga total</th>
            <th>Berat total</th>
            <th>Harga per Kg</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {
            buah.map((res, index) => {
                return ( 
                  <tr key={ index }>
                    <td>{index + 1}</td>
                    <td>{res.nama}</td>
                    <td>{res.hargaTotal}</td>
                    <td>{res.beratTotal/1000} kg</td>
                    <td>{res.hargaTotal*1000/res.beratTotal}</td>
                    <td>
                      <button onClick={handleEdit} value={index}>Edit</button>
                      <button onClick={handleDelete} value={index}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

    
    <form method="post" id="jarak" onSubmit={handleSubmit}>
    <label htmlfor="fnama" id="bold">Nama</label>
    <input required type="text" id="fnama" name="nama"  value={input.nama} onChange={handleChange}/>

    <label htmlfor="htotal" id="bold" >Harga Total</label>
    <input required type="number" id="htotal" name="hargaTotal" placeholder="0" value={input.hargaTotal} onChange={handleChange} />

    <label htmlfor="btotal" id="bold" >Berat total</label>
    <input required type="number" id="btotal" name="beratTotal" min="2000" placeholder="0" value={input.beratTotal} onChange={handleChange} />

    
  
    <input type="submit" value="Submit"/>
    </form>
    </>
  )
}
export default App