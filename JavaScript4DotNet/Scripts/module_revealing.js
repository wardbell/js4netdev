app.registerModule({
    name: "Modularity: Revealing Module Pattern",
    fn: function (app) {
        app.resetModularityDemo();


        app.anchorChangeRevealingModule.init(); // using the module


        app.log("*** Revealing Module Patter (RMP) ***");
        var log = app.modularityLog;
        log("Nothing in the global namespace");
        log("Adds a module object to the application namespace.  " +
            "The members of the module object are the module API."+
            "These members are neatly assembled in the module function's return statement.");
    }
})


/*** THE MODULE DEFINITION ***/

// Revealing Module Pattern (RMP) - creates a function w/ mostly private members
// adds itself as an object to the application namespace
app.anchorChangeRevealingModule = function () {
    var config = {
        colors: ["#F63", "#CC0", "#CFF"]
    }

    function alterColor(linkObj, color) {
        linkObj.style.backgroundColor = color;
    }

    function init() {
        var self = this;

        // get all links on the page
        var anchors = document.getElementsByTagName("a");
        var size = anchors.length;

        for (var i = 0; i < size; i++) {
            anchors[i].color = config.colors[i];

            anchors[i].onclick = function () {
                alterColor(this, this.color);
                return false;
            };
        }
    }

    // The "revealing" part is in this return object
    // where you can see the module's "public API" at a glance
    return {
        init: init // public method can be accessed from outside
    }
}();
