angular.module('channels', ['ngAnimate']);
angular.module('channels')
 .directive('channels', ['loaderService'
        ,function(loaderService) {
            return {
                replace: true,
                restrict: 'E',
                templateUrl: '/javascripts/src/views/channels.html',
                scope: {
                    loadFrom: '@'
                },
                link: function () {
                    loaderService.getChannels();
                }
            }
    }]);
angular.module('channels')
    .service('loaderService', ['$log'
            ,function ($log) {
                this.getChannels = function() {
                    $log.debug('getChannels here');
                };
                this.getChannelById = function(id) {
                    $log.debug('getChannelById here');     
                };
     }]);