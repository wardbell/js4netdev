app.registerModule({
    name: "Modularity: Singleton",
    fn: function (app) {
        app.resetModularityDemo();


        anchorChangeSingleton.init(); // call the global singleton's methods


        app.log("*** Singleton ***");
        var log = app.modularityLog;
        log("Only anchorChangeSingleton is in the global namespace");
        app.objectLogger(anchorChangeSingleton, log);
    }
})



/*** THE MODULE DEFINITION ***/

// singleton syntax creates a global encapsulating object
// only one object enters the global namespace
var anchorChangeSingleton = {
    config: {
        colors: ["#F63", "#CC0", "#CFF"]
    },

    alterColor: function (linkObj, newColor) {
        linkObj.style.backgroundColor = newColor;
    },

    init: function () {
        var self = this;

        // get all links on the page
        var anchors = document.getElementsByTagName("a");
        var size = anchors.length;

        for (var i = 0; i < size; i++) {
            anchors[i].color = self.config.colors[i];

            anchors[i].onclick = function () {
                self.alterColor(this, this.color);
                return false;
            };
        }
    }
};

