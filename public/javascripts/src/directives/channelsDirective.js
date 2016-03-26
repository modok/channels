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