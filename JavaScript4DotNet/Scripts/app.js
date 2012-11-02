(function (exports) {

    $('#modules').change(function () {
        moduleSelected(this);
    });

    function log (msg) {
        $("#msg").append("<p>" + msg + "</p>")
    }

    function moduleSelected(moduleSelector) {
        $("option:selected", moduleSelector).each(function () {
            resetView();
            bookmarkModule(this.id);
            var mod = modules[this.text];
            if (mod) { mod.fn(app); }
        });
    }

    function resetView() {
        $("#msg").empty();
        $("#modularityDemo").addClass('hide');
        $("#namespaceDemo").addClass('hide');
        window.someVariable = undefined; // a global variable for 'Variable Hoisting' module
    }

    function resetModularityDemo() {
        $("#modularityLog").empty();

        var anchorList$ = $("#anchorList");
        anchorList$.empty();

        var links = [
            "<a href='http://news.bbc.co.uk/'>News on BBC website</a>",
            "<a href='http://nytimes.com/'>Frontpage of The New York Times</a>",
            "<a href='http://www.guardian.co.uk/'>Guardian Unlimited</a>"
        ];

        for (var i=0; i < links.length; i++){
            anchorList$.append("<li>" + links[i] + "</li>");
        }

        $("#modularityDemo").removeClass('hide');
    }

    // log messages into the modularityDemo div
    function modularityLog (msg) {
        $("#modularityLog").append("<p>" + msg + "</p>")
    };


    var modules = {},
        nextModuleId = 1,
        registerModule = function (module) {
            var name = module.name;
            modules[name] = module;
            $('#modules').append(
                "<option id='mod" + nextModuleId + "'>" + name + "</option>");
            nextModuleId += 1;
        }

    var bookMarkKey = "bookmarkedModuleId",
        bookmarkModule = function (moduleId) {
            if (window.localStorage) {
                window.localStorage.setItem(bookMarkKey, moduleId.toString());
            }
        },
        restoreModuleFromBookmark = function () {
            if (window.localStorage) {
                var moduleId = window.localStorage.getItem(bookMarkKey);
                if (moduleId) {
                    $("#"+moduleId).each(function () { this.selected = true; });
                }
                $('#modules').change(); // trigger the handler
            }
        };

    function objectLogger(obj, logger) {
        logger("{");
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                logger("<div style='margin-left:1em;'>"+ property + ": " + obj[property] + "</div>");
            }
        }
        logger("}");
    }

    exports.app = {
        log: log,
        modules: {},
        modularityLog: modularityLog,
        registerModule: registerModule,
        resetModularityDemo: resetModularityDemo,
        restoreModuleFromBookmark: restoreModuleFromBookmark,
        objectLogger: objectLogger
    };

})(window);