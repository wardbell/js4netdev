app.registerModule({
    name: "Falsey",
    fn: function (app) {
        var log = app.log;
        var show = function (value, msg) {
            app.log(msg + " is " + (value ? "true" : "false"));
        }

        /*** LESSON BEGINS ***/

        log("*** false-y ***");

        // Six false-y values
        show(false, 'false')
        show(0, '0');
        show(null, 'null');
        show(undefined, 'undefined');
        show("", '"" (empty string)');
        show((0 / 0), '(0 / 0)'); //NaN


        log("** PAUSE **"); /* PAUSE HERE

        log("*** truth-y ***");
   
        // Everything else is truth-y
        show(true, 'true');
        show(1 , '1');
        show({}, '{ }');
        show(function () { }, 'function () { } ');
        show("Hello, world", '"Hello, world"');
        show("false", '"false"');

    
        log("*** weird '==' comparisons ***");
    
        show(0 == "", '0 == ""');
        show(0 == " \t\r\n", '0 == " \t\r\n"'); // whitespace coerced to "" before test
        show(0 == "0", '0 == "0"');
        show(0 == false, '0 == false');
        show(null == undefined, 'null == undefined');
        show(NaN != NaN, 'NaN != NaN');


        log("*** always use '===' and '!==' ***");
        show(0 === "", '0 === ""');
        show(0 === " \t\r\n", '0 === " \t\r\n"');
        show(0 === "0", '0 === "0"');
        show(0 === false, '0 === false');
        show(null === undefined, 'null === undefined');
  
        log("*** NaN's are just weird ***");
        // Number.isNaN(1 / 0)  is NaN = Not a number
        show(NaN !== NaN, 'NaN !== NaN');
        show(NaN === NaN, 'NaN === NaN');

        */
}
});