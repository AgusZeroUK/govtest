
(function (){
    'use strict';

    angular
        .module('app', ['ngComponentRouter'])
        .config(function($locationProvider){
            $locationProvider.html5Mode(true);
        })
        .value('$routerRootComponent', 'myApp')
        .component('myApp', {
            templateUrl: 'app/main.component.html',
            controller: 'MainController',
            $routeConfig: [
                {path: '/', name: 'PersonalDetails', component: 'personalDetails', useAsDefault: true},
                {path: '/confirmation/:id', name: 'Confirmation', component: 'confirmation'},
            ]
        })
        .controller('MainController', MainController);

        function MainController() {
        
         }

})();