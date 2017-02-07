(function (){
  'use strict';

    angular
        .module('app')
        .factory('userService', userService);

    function userService($http) {
        var service = {
             getUser: getUser,
             applyUser: applyUser
        };
        return service;

        ////////////////

        function applyUser(user){
            return $http.post('/api/user', user);
        }

        function getUser(id){
            return $http.get('/api/user/' + id);
        }
    }

})();