app.registerModule({
    name: "Duck Typing",
    fn: function (app) {
        var log = app.log;

        /*** LESSON BEGINS ***/

        var Dog = function(name) {
            this.name = name;
        }

        Dog.prototype.speak = function() {
            return log(this.name +  " says Woof!");}
    
        var fido= new Dog("Fido");
        fido.speak();

        log("** PAUSE **"); /* PAUSE HERE  

        var Duck = function(name) {
            this.name = name;
        }
 
        var don= new Duck("Donald");
        //don.speak();// Fail! Duck's can't speak

        Duck.prototype.speak = Dog.prototype.speak;
        don.speak(); 

        Duck.prototype.speak = function() {
            return log(this.name +  " says Quack!");}
        don.speak();


        */
    }
});