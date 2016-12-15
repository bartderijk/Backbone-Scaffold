requirejs.config({
    "baseUrl": "js",
    "paths": {
        'jquery': 'libs/jquery-3.1.1.slim.min',
        'underscore': 'libs/lodash',
        'backbone': 'libs/backbone-min'
    }
});

require(['views/app'], function(AppView) {
    new AppView();
});