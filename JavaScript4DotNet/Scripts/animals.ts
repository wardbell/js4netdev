class Animal {
   constructor(public name) { }
   move(meters) {
       log(this.name + " moved " + meters + "m.");
   }
}

class Snake extends Animal {
   move() {
       log("Slithering...");
       super.move(5);
   }
}

class Horse extends Animal {
   move() {
       log("Galloping...");
       super.move(45);
   }
}

var sam = new Snake("Sammy the Python")
var tom: Animal = new Horse("Tommy the Palomino")
var dave = new Animal("Super Dave Osbourne");

sam.move()     // compiler forbids move(34)
tom.move(34)   // can write move(34) ... but still 45m
dave.move(34)  // will move 34m




function log(message: string) {
    //alert(message);
    document.body.innerHTML += "<p>"+message+"</p>";
}