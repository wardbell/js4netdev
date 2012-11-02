app.registerModule({
    name: "Loose Typing",
    fn: function (app) {
        var log = app.log;

        /*** LESSON BEGINS ***/

        var foo = "Some string";  // string
        log(foo + " is a " + typeof foo);

        foo = 42; // number
        log(foo + " is a " + typeof foo);

        foo = new Date(); // date
        log(foo + " is an " + typeof foo + " (dates are objects)");

        foo = true; // boolean
        log(foo + " is a " + typeof foo);

        foo = []; // empty array
        log(JSON.stringify(foo) + " is an " + typeof foo + " (arrays are objects)");

        foo = [1, "two", 1 + 2]; // heterogeneous array
        log(JSON.stringify(foo) + " is an " + typeof foo + " (arrays are objects)");

        foo = { first: "Ward", last: "Bell" };
        log(JSON.stringify(foo) + " is an " + typeof foo);

        foo = function foo() { // function
            return "Hello, world!";
        };
        log(foo + " is a " + typeof foo);

        foo.isCool = true; // function with properties
        log(foo.isCool + " is the value of the 'isCool' field tacked on to the 'foo' function");

        /*** LESSON ENDS ***/
    }
});