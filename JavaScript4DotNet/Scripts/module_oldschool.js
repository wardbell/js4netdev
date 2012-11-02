app.registerModule({
    name: "Modularity: Old School",
    fn: function (app) {
        app.resetModularityDemo();
        var log = app.log;


        anchorChangeOldSchool();


        app.log("*** Old School ***");
        var log = app.modularityLog;
        log("'config', 'alterColor', 'anchorChangeOldSchool' are all in the global namespace");
        log("config: " + window.config);
        log("alterColor: " + window.alterColor);
        log("anchorChangeOldSchool: " + window.anchorChangeOldSchool);
    }
})


/*** THE MODULE DEFINITION ***/

// old school - dump everything into global namespace
// 'config', 'alterColor', 'anchorChangeOldSchool' are all in the global namespace

var config = {
    colors: ["#F63", "#CC0", "#CFF"]
};

function alterColor(linkObj, newColor) {
    linkObj.style.backgroundColor = newColor;
}

function anchorChangeOldSchool() {

    // get all links on page
    var anchors = document.getElementsByTagName("a");
    var size = anchors.length;

    // loop through anchors and attach events
    for (var i = 0; i < size; i++) {
        anchors[i].color = config.colors[i];

        anchors[i].onclick = function () {
            alterColor(this, this.color);
            return false;
        };
    }
}

