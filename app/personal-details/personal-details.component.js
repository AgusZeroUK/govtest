(function (){
    'use strict';

    angular
        .module('app')
        .component('personalDetails', {
            templateUrl: 'personal-details/personal-details.component.html',
            controller: 'PersonalDetailsController'
        })
        .controller('PersonalDetailsController', personalDetailsController);


        function personalDetailsController(countriesApi,userService, $rootRouter) {
            var $ctrl = this;


            $ctrl.title = 'Some Government Service';
            $ctrl.submitted = false;
            $ctrl.countries = [];
            $ctrl.user = user();
            $ctrl.submitForm = submitForm;


            activate();

            function activate(){
                countriesApi.getCountries().then(populateCountries).catch(function(error){
                    $ctrl.countries = undefined;
                });
            }

            function populateCountries(countries){
                if(countries && countries.data){
                    $ctrl.countries = countries.data;
                }
            }

            function user(){
                return {
                   name: null,
                   age: null,
                   gender: null,
                   country: null,
                }
            }

            function submitForm(){
                $ctrl.submitted = true;
                if($ctrl.form.$valid && $ctrl.user.name && $ctrl.user.age && $ctrl.user.gender && $ctrl.user.country){
                    userService.applyUser($ctrl.user).then(goToConfirmation);
                }
            }

            function goToConfirmation(id){
                var idAux = id.data.id;
                $rootRouter.navigateByUrl('/confirmation/' + idAux);
            }

        }

})();