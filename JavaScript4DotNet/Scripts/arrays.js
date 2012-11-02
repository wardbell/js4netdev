app.registerModule({
    name: "Arrays",
    fn: function (app) {
        var log = app.log;

        /*** LESSON BEGINS ***/

        //* Array as an integer indexed hash *//
        var array = [1, 2, 3]
        log(array);
        log(array[1]);
 
        log("** PAUSE **"); /* PAUSE HERE

        array[10] = 11;
        log(array);


        log(array.length);
        //log((array[7]===undefined)+"hi");   
        array["red"] = "rouge" // not what you think!
        log(array);
        debugger;
        log(JSON.stringify(array));
        log(array.red);

        log("** for ... in **");
        for (var item in array) {
            log(array[item]);
        }
       

        log("** for ( ; ; ) **");
        for (var i = 0, len = array.length; i < len; i++){
            log(array[i]);
        }
     
 
        // ECMAScript 5 (EC5) extensions
        log("** forEach - only the defined entries **");
        array.forEach(function (item) {log(item);} );

 
        */
    }
});