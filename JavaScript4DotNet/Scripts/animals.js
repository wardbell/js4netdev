var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (meters) {
        log(this.name + " moved " + meters + "m.");
    };
    return Animal;
})();
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        _super.apply(this, arguments);

    }
    Snake.prototype.move = function () {
        log("Slithering...");
        _super.prototype.move.call(this, 5);
    };
    return Snake;
})(Animal);
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse() {
        _super.apply(this, arguments);

    }
    Horse.prototype.move = function () {
        log("Galloping...");
        _super.prototype.move.call(this, 45);
    };
    return Horse;
})(Animal);
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
var dave = new Animal("Super Dave Osbourne");
sam.move()// compiler forbids move(34)
;
tom.move(34)// can write move(34) ... but still 45m
;
dave.move(34)// will move 34m
;
function log(message) {
    //alert(message);
    document.body.innerHTML += "<p>" + message + "</p>";
}
