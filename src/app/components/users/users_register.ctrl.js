(function() {
    'use strict';

    angular.module('marathon').controller('RegisterController', ctrl);

    function ctrl(Users, $state, crAcl) {
        var self = this;
        crAcl.setRole("ROLE_GUEST");

        this.reset = function() {
            self.user = {};
        };

        this.register = function() {
            delete self.user.controlPass;

            Users.create(self.user).then(function(resp, $log) {
                if(resp.status === 200 && resp.statusText === "OK") {
                    $state.go('login');
                } else {
                    $log.warn(resp);
                }
            });
        };

        self.formFields = Users.registerFields;
    }
})();
