//Soal 1
console.log("Soal ke 1 \n");
var kataPertama = "saya ";
var kataKedua = "senang ";
var kataKetiga = "belajar ";
var kataKeempat = "javascript";
console.log(kataPertama+kataKedua+kataKetiga+kataKeempat+"\n")

//Soal 2
console.log("Soal ke 2 \n");
var panjangPersegiPanjang = "8";
var lebarPersegiPanjang = "5";
var alasSegitiga= "6";
var tinggiSegitiga = "7";


var kelilingPersegiPanjang= 2*(parseInt(panjangPersegiPanjang)+parseInt(lebarPersegiPanjang));
var luasSegitiga= parseInt(alasSegitiga)*parseInt(tinggiSegitiga)/2;
console.log("luas Segitiga = "+luasSegitiga);
console.log("keliling persegi panjang ="+kelilingPersegiPanjang+"\n");

//Soal 3
console.log("Soal ke 3 \n");
var sentences= 'wah javascript itu keren sekali'; 

var firstWord= sentences.substring(0, 3); 
var secondWord= sentences.substring(4, 14); 
var thirdWord= sentences.substring(15, 18); 
var fourthWord= sentences.substring(19, 24); 
var fifthWord= sentences.substring(25, 31); 

console.log('Kata Pertama: ' + firstWord); 
console.log('Kata Kedua: ' + secondWord); 
console.log('Kata Ketiga: ' + thirdWord); 
console.log('Kata Keempat: ' + fourthWord); 
console.log('Kata Kelima: ' + fifthWord+"\n");

// Soal 4
console.log("Soal ke 4 \n");
var nilaiJohn = 80;
var nilaiDoe = 50;

if(nilaiJohn>=80&&nilaiJohn<=100){
    console.log("Index nilai John = A");
}
else if(nilaiJohn>=70&&nilaiJohn<80){
    console.log("Index nilai John = B");
}
else if(nilaiJohn>=60&&nilaiJohn<70){
    console.log("Index nilai John = C");
}
else if(nilaiJohn>=50&&nilaiJohn<60){
    console.log("Index nilai John = D");
}
else if(nilaiJohn>=0&&nilaiJohn<50){
    console.log("Index nilai John = E");
}
else{
    console.log("Index nilai tidak tersedia");
}

if(nilaiDoe>=80&&nilaiDoe<=100){
    console.log("Index nilai Doe = A");
}
else if(nilaiDoe>=70&&nilaiDoe<80){
    console.log("Index nilai Doe = B");
}
else if(nilaiDoe>=60&&nilaiDoe<70){
    console.log("Index nilai Doe = C");
}
else if(nilaiDoe>=50&&nilaiDoe<60){
    console.log("Index nilai Doe = D");
}
else if(nilaiDoe>=0&&nilaiDoe<50){
    console.log("Index nilai Doe = E");
}
else{
    console.log("Index nilai tidak tersedia");
}
console.log("\n");

// Soal 5
console.log("Soal ke 5 \n");
var tanggal = 18;
var bulan = 8;
var tahun = 2002;

switch(bulan){
    case 1 : bulan=" Januari ";break;
    case 2 : bulan=" Februari ";break;
    case 3 : bulan=" Maret ";break;
    case 4 : bulan=" April ";break;
    case 5 : bulan=" Mei ";break;
    case 6 : bulan=" Juni ";break;
    case 7 : bulan=" Juli ";break;
    case 8 : bulan=" Agustus ";break;
    case 9 : bulan=" September ";break;
    case 10 : bulan=" Oktober ";break;
    case 11 : bulan=" November ";break;
    case 12 : bulan=" Desember ";break;
    default: console.log("Bulan error");
}

console.log(tanggal+bulan+tahun);