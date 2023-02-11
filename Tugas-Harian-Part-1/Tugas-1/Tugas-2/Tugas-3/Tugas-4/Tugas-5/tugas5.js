// Soal 1
console.log("-----Soal 1-----");
function luasPersegiPanjang(p,l){
    return (p*l);
}
function kelilingPersegiPanjang(p,l){
    return (2*(p+l));
}
function volumeBalok(p,l,t){
    return (p*l*t);
}
var panjang= 12
var lebar= 4
var tinggi = 8
var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
var volumeBalok = volumeBalok(panjang, lebar, tinggi)
console.log(luasPersegiPanjang) 
console.log(kelilingPersegiPanjang)
console.log(volumeBalok)
// Soal 2
console.log("-----Soal 2-----");
function introduce(name,age,address,hobby){
    return("Nama saya "+name+", umur saya "+age+" Tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby+"!");
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di Jalan belum jadi, dan saya punya hobby yaitu Gaming!" 
// Soal 3
console.log("-----Soal 3-----");
var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
var objekDaftarPeserta={}
objekDaftarPeserta = {
    Name : arrayDaftarPeserta[0],
    Gender : arrayDaftarPeserta[1],
    Hobby : arrayDaftarPeserta[2],
    YearOfBirth : arrayDaftarPeserta[3]
}
console.log(objekDaftarPeserta);
// Soal 4
console.log("-----Soal 4-----");
var buah=[
     {nama:"Nanas", warna:"Kuning", biji: false , harga:9000},
     {nama:"Jeruk", warna:"Oranye", biji:true, harga:8000},
     {nama:"Semangka", warna:"Hijad & Merah", biji:true, harga:10000},
     {nama:"Pisang", warna:"Kuning", biji:false , harga:5000},
];
var hasilbuah = buah.filter(function (a){
    return a.biji == false ;
});
console.log(hasilbuah);

//Soal 5
console.log("-----Soal 5-----");
function tambahDataFilm(nama, durasi, genre, tahun){
  let tambahDataFilm = {};
  tambahDataFilm.nama = nama;
  tambahDataFilm.durasi = durasi;
  tambahDataFilm.genre = genre;
  tambahDataFilm.tahun = tahun;
  dataFilm.push(tambahDataFilm);
}
var dataFilm = []
tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)