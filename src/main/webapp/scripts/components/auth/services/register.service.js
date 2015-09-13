'use strict';

angular.module('cbcApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


