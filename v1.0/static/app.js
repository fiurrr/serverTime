(function() {
    var app = angular.module('app', []);

    /* $scope -> mv */
    function mainCtrl($http, $interval, mv) {
        (function init() {
            function getServerTime() {
                $http.get('/api/current')
                    .success(function(res) {
                        mv.actualTime = parseDate(new Date(res.timestamp));
                    })
                    .error(function() {
                        console.log('Cant connect to server');
                    });
            }
            getServerTime();
            $interval(getServerTime, 1000);
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
    mainCtrl.$inject = ['$http', '$interval', '$scope'];
    app.controller('mainCtrl', mainCtrl);
})();