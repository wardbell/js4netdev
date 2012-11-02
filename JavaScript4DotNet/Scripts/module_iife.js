
app.registerModule({
    name: "Modularity: IIFE",
    fn: function (app) {
        app.resetModularityDemo();

        app.log("*** Immediately Invoked Function Expression (IIFE) ***");
        var log = app.modularityLog;
        log("Nothing in the global namespace");

        /*** THE MODULE DEFINITION ***/

        // Immediately Invoked Function Expression (IIFE) - no globals at all
        (function () {
            var config = {
                colors: ["#F63", "#CC0", "#CFF"]
            }

            function alterColor(linkObj, color) {
                linkObj.style.backgroundColor = color;
            }

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


        }());


    }
})



