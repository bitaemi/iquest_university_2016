(function(){
    'use strict';

    angular.module('marathon').controller('LoginController', LoginController);

    function LoginController(Session, $state){
        var self = this;
        this.login = function(){
            Session.login(self.identifier, self.password).then(function(response){
                if(response['token']){
                    $state.go('dash');
                }
            });
        };
    }

})();



