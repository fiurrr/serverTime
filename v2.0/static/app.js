(function() {
    var app = angular.module('app', []);

    function mainCtrl($scope, $http, $interval, socketIO) {
        (function init() {
            $scope.$on('timeUpdate', function(event, timeUpdate) {
                $scope.actualTime = parseDate(new Date(timeUpdate.timestamp));
                $scope.$apply();
            });
        })();

        function parseDate(date) {
            var year = date.getFullYear(),
                month = date.getMonth()+ 1,
                day = date.getDate(),
                hours = date.getHours(),
                minutes = date.getMinutes(),
                seconds = date.getSeconds();

            return year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;
        }
    }
    mainCtrl.$inject = ['$scope', '$http', '$interval', 'socketIO'];
    app.controller('mainCtrl', mainCtrl);

    function socketIO($rootScope) {
        var socket = io();
        socket.on('currentTime', function(serverTime) {
            $rootScope.$broadcast('timeUpdate', serverTime);
        });
    }
    socketIO.$inject = ['$rootScope'];
    app.service('socketIO', socketIO);
})();