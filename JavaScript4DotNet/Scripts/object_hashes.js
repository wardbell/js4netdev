app.registerModule({
    name: "Object Hashes",
    fn: function (app) {
        var log = app.log;

        /*** LESSON BEGINS ***/
        var hash = {
            red: "rouge",
            blue: "bleu"
        };

        hash.green = "vert";

        log(JSON.stringify(hash));

        log("** PAUSE **"); /* PAUSE HERE 

        log(hash["red"]);
        log(hash.red);

        log(hash["purple"]); // not in the hash

        hash["red"] = "light gray"; // I'm color blind
        hash.green = "gray";        // I'm color blind

        log(JSON.stringify(hash));

        log("** for ... in **");
        for (var property in hash) {
            if (hash.hasOwnProperty(property)) {
                log(property + ": " + hash[property]);
            }
        }

        */
    }
});