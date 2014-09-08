(function() {
    var path = require('path');
    var express = require('express');

    var app = express();

    /* serving static files */
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '/static', 'index.html'));
    });
    app.get('/static/main.css', function(req, res){
        res.sendFile(path.join(__dirname, '/static', 'main.css'));
    });
    app.get('/static/app.js', function(req, res){
        res.sendFile(path.join(__dirname, '/static', 'app.js'));
    });
    app.get('/static/jquery.js', function(req, res){
        res.sendFile(path.join(__dirname, '/static', 'jquery.js'));
    });
    app.get('/static/angular.min.js', function(req, res){
        res.sendFile(path.join(__dirname, '/static', 'angular.min.js'));
    });

    /*  providing REST api */
    app.get('/api/current', function(req, res){
        res.send({ timestamp: new Date() });
    });

    app.listen(3000, function(){
        console.log('Server listening on port:3000');
    });
})();