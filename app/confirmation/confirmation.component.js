(function (){
    'use strict';

    angular
        .module('app')
        .component('confirmation', {
            templateUrl: 'confirmation/confirmation.component.html',
            controller: 'ConfirmationController'
        })
        .controller('ConfirmationController', confirmationController);


        function confirmationController(userService, $rootRouter){
		    var $ctrl = this;
		    $ctrl.userName = null;

		    this.$routerOnActivate = function(next){
		        userService.getUser(next.params.id).then(function(user){
		            $ctrl.userName = user.data.name;
		        });
		    }
        }


})();