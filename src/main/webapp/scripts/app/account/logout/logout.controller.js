'use strict';

angular.module('cbcApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
