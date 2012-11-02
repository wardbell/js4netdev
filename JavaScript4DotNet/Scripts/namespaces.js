app.registerModule({
    name: "Namespace",
    fn: function (app) {
        $("#namespaceDemo").removeClass('hide');
    }
})

// Without namespace, we pollute globals
// and risk name collisions (see below)

// Make this the log function in the global namespace
log = function (msg) {
    $("#namespaceDemo").append("<p>" + msg + "</p>")
};

// adds message to the global namespace
message = "Hello, world. ";
log(message);

// so does this ... despite 'var' keyword
var message2 = "Goodbye, world.";
log(message2);

// ... someone else in another script makes same mistake
var message2 = "Uh oh!";
log(message2);

/**********************************/
// With Namespace

//*** Script 1 ***

var my = my || {}; // define if doesn't exist

my.message = "Hello, Namespace. ";
log(my.message);


//*** Script 2 ***

var my = my || {}; // define if doesn't exist

my.message2 = "Goodbye, Namespace.";
log(my.message2);


my = null;

//*********************************
log("-- the 'my' namespace --")
for (property in my) {
    log(property + ": " + my[property]);
}

log("** PAUSE **"); /* PAUSE HERE  

//*********************************
log("-- the Global namespace --")
for (property in window) {
    log(property + ": " + window[property]);
}

*/