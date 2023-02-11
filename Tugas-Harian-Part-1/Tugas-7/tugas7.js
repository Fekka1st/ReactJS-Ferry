console.log("----Soal 1----")
console.log("----Release 0----")
class Animal {
    legs = 4;
    name;
    cold_blooded = false;
    constructor(name){
        this.name = name;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
sheep.legs = 3
console.log(sheep.legs)

console.log("----Release 1----")
class Ape extends Animal{
    yell(){
        console.log("Auooo");
    }
}

class Frog extends Animal{
    jump(){
        console.log("hop hop");
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
sungokong.legs = 2
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)

var kodok = new Frog("buduk")
kodok.jump() // "hop hop"
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)
console.log("\n----Soal 2----")
  class Clock {
      constructor({ template }){
        var timer;
  
        function render() {
          var date = new Date();
      
          var hours = date.getHours();
          if (hours < 10) hours = '0' + hours;
      
          var mins = date.getMinutes();
          if (mins < 10) mins = '0' + mins;
      
          var secs = date.getSeconds();
          if (secs < 10) secs = '0' + secs;
      
          var output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
      
          console.log(output);
        }
      
        this.stop = function() {
          clearInterval(timer);
        };
      
        this.start = function() {
          render();
          timer = setInterval(render, 1000);
        };
      }
  }
  
  var clock = new Clock({template: 'h:m:s'});
  clock.start();  