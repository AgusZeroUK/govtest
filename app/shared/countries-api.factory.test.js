/*describe('countries-api', function (){
  var service;
  var $httpBackend;
  var url = 'https://restcountries.eu/rest/v1/region/Europe';
  var promiseResult = null;

  beforeEach(module('app'));

  beforeEach(inject(function($injector){
    service = $injector.get('countriesApi');
    $httpBackend = $injector.get('$httpBackend');
    promiseResult = null;
  }));

  function setPromiseValue(data){
    promiseResult = data;
  }

  it('Should get all the countries', function(){
    service.getCountries().then(setPromiseValue);
    expect(promiseResult.status).toEqual(200);
  });

});*/