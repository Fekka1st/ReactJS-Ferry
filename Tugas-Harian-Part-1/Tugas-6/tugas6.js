// Soal 1
console.log("----Soal 1----");
const luaslingkaran = (jari) => {
    return (22*jari*jari)/7;
}
const kelilinglingkaran = (jari) =>{
    return (2*22*jari)/7;
}
console.log(luaslingkaran(7));
console.log(kelilinglingkaran(7));
// Soal 2
console.log("----Soal 2----");
const introduce = (...rest) => {
    let[nama,umur,jk,job] = rest;
    return "Pak "+`${nama}`+" adalah seorang "+`${job}`+" yang berusia "+`${umur}`+" tahun";
}


const perkenalan = introduce("John", "30", "Laki-Laki", "penulis");
console.log(perkenalan) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

//Soal 3
console.log("----Soal 3----");
const newFunction = (firstName, lastName)=>{
    return {
      firstName: firstName,
      lastName: lastName,
      fullName: function(){
        console.log(firstName + " " + lastName)
      }
    }
  }
    
  // kode di bawah ini jangan diubah atau dihapus sama sekali
  console.log(newFunction("John", "Doe").firstName)
  console.log(newFunction("Richard", "Roe").lastName)
  newFunction("William", "Imoh").fullName()
// Soal 4
console.log("----Soal 4----");
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
 }
 // kode diatas ini jangan di rubah atau di hapus sama sekali
const {name:phoneName, brand:phoneBrand, year, colors:[colorBlack,colorWhite, colorBronze]} = phone;
 // kode di bawah ini jangan dirubah atau dihapus
 console.log(phoneBrand, phoneName, year, colorBlack, colorBronze) 


//Soal 5
console.log("----Soal 5----");
  let warna = ["biru", "merah", "kuning" , "hijau"]

  let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020 
  }
  
  let buku = {
    nama: "pemograman dasar",   
    jumlahHalaman: 172,
    warnaSampul:["hitam"]
  }
  buku.warnaSampul.concat(warna);
buku["warnaSampul"].push(...warna);
  var combine = {...buku,...dataBukuTambahan};
  console.log(combine);