(function (){
  'use strict';
  
angular
    .module('app')
    .factory('countriesApi', countriesApi);

function countriesApi($http){
    var factory;

    var apiUrl = 'https://restcountries.eu/rest/v1/region/Europe';

    factory = {
        getCountries: getCountries,

    };

    return factory;

    //////////////////

    function getCountries(){
        return $http.get(apiUrl);
    }


}   
})();
