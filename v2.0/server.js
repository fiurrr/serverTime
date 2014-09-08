(function() {
    var path = require('path');
    var app = require('express')();
    var http = require('http').Server(app);
    var io = require('socket.io')(http);

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
    app.get('/static/socket.io.js', function(req, res){
        res.sendFile(path.join(__dirname, '/static', 'socket.io.js'));
    });

    /*  providing websocket solution */
    io.on('connection', function(socket){
        console.log('a user connected, sending server time every second');
        socket.emit('currentTime', { timestamp: new Date() });
        var timeUpdater = setInterval(function() {
            socket.emit('currentTime', { timestamp: new Date() });
        }, 1000);

        socket.on('disconnect', function(){
            console.log('user disconnected, sending stopped');
            clearInterval(timeUpdater);
        });
    });

    http.listen(3000, function(){
        console.log('Server listening on port:3000');
    });
})();