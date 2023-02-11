// Soal 1 
var garis="==========";
console.log(garis+"Soal ke 1"+garis);
console.log("LOOPING PERTAMA");
var i=2;
while(i<=20){
    
    if(i%2==0){
        console.log(i+" - I love coding");
    }
    i++;
}
console.log("LOOPING KEDUA");
var j=20;
while(j>=2){
    if(j%2==0){
        console.log(j+" - I will become a frontend developer");
    }
    j--;
}

// Soal 2
console.log(garis+"Soal ke 2"+garis);
var k;
for(k=1;k<=20;k++){
    if(k%3==0&&k%2!=0){
        console.log(k+" - I Love Coding");
    }else if(k%2!=0){
        console.log(k+" - Santai ");
    }else if(k%2==0){
        console.log(k+" - Berkualitas");
    }
}

//Soal 3
console.log(garis+"Soal ke 3"+garis);
var n=7;
let string="";
for(i=0;i<n;i++){
    for(j=0;j<=i;j++){
        string+="#"
    }
    string+="\n"
}
console.log(string);
// Soal 4
console.log(garis+"Soal ke 4"+garis);
let susun="";
var kalimat=["aku" , "saya " , "sangat " , "sangat" , "senang " , "belajar " , "javascript "];
kalimat.splice(0,1);
kalimat.splice(2,1);
for(i=0;i<=4;i++){
    susun+=kalimat[i];
}
console.log(susun+"\n");

// Soal 5
console.log(garis+"Soal ke 5"+garis);
var sayuran=[];
sayuran.push("Kangkung","Bayam","Buncis","Kubis","Timun","Seledri","Tauge");
sayuran.sort();
for(i=0;i<7;i++){
    console.log((i+1)+". "+sayuran[i]);
}
