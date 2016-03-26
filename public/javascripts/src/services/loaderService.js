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