define("views/app",[
        "jquery",
        "underscore",
        "backbone"
    ],
    function($, _, Backbone) {

        var AppView = Backbone.View.extend({

            initialize: function() {

                $('body').append('AppView initialize init');

            }
        });

        return AppView;

    });
