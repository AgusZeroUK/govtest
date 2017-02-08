describe('retrieval of country', function (){
  var service;
  var $httpBackend;
  var url = 'https://restcountries.eu/rest/v1/region/Europe';
  var promiseResult = null;

  beforeEach(module('app'));

  beforeEach(inject(function($injector){
    service = $injector.get('countriesApi');
    var $q = $injector.get('$q');
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('https://restcountries.eu/rest/v1/region/Europe').respond(200, $q.when([1,2]))
    promiseResult = null;
  }));

  function setPromiseValue(data){
       promiseResult = data;
  }

  it('Should get all the countries', function(){
    service.getCountries().then(setPromiseValue);
    $httpBackend.flush(); 
    expect(promiseResult.status).toEqual(200);       
  });

});