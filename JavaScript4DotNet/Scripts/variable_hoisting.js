window.someVariable = undefined; // a global variable

app.registerModule({
    name: "Variable hoisting",
    fn: function (app) {
        var log = app.log;

        /*** LESSON BEGINS ***/

        log(someVariable); //undefined
        someVariable = 42; // variable in global namespace
        log(someVariable); // 42

        function doSomething() {
            log("-- Entered 'doSomething' function --");
            log(someVariable); // should this be 42? Why or why not?

            someVariable = 1; 
            log(someVariable); // should this be 1? Why or why not?

            log(window.someVariable); // should this be 1? Why or why not?

            // ... more stuff ...

            if (false) {
                var someVariable = 0;
                log(someVariable); 
            }
        }

        doSomething();

        log(someVariable); // should this be 1? Why or why not?



        //******************************
        // Rewrite to show hoisting & shadowing
        function doSomethingClarified() {

            log("-- Enter 'doSomethingClarified' --");

            var someVariable; // local; shadows global variable

            log(someVariable); // undefined
            someVariable = 1;
            log(someVariable); // 1
            log(window.someVariable); // 42 - the global variable
            if (false) {
                someVariable = 0;
            }
        }
    }

});
