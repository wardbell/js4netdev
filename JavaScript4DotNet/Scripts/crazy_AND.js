app.registerModule({
    name: "Crazy AND",
    fn: function (app) {
        var log = app.log;

        /*** LESSON BEGINS ***/

        // array to sort
        var array = [1, 5, -1, 0, 10, -100];

        var len = array.length, i, max = Math.max();

        log(max); // -Infinity, the identity value for Math.max

        for (i = 0; i < len; i++) {
            // abusing the && operator
            array[i] > max && (max = array[i]);
        }

        log(max);
    }
});