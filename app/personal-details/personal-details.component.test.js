describe('country data persistence', function () {
  var $scope;
  var $q;
  var deferred;
  var controller;

  beforeEach(module('app'));

  beforeEach(inject(function($componentController, _$rootScope_, _$q_, countriesApi) {
    $q = _$q_;
    $scope = _$rootScope_.$new();
    deferred = _$q_.defer();
    spyOn(countriesApi, 'getCountries').and.returnValue(deferred.promise); 
    controller = $componentController('personalDetails', { 
      $scope: $scope, 
      countriesApi: countriesApi
    });
  }));

  it('should resolve promise', function () {
    deferred.resolve({
        data:[{
                name: "Spain"
              },
              {
                name: "Holland"
              }
        ]
    });  
    $scope.$digest();
    expect(controller.countries).not.toBe(undefined);
  });
  
  it('should reject promise', function () {
    deferred.reject();
    $scope.$digest();
    expect(controller.countries).toBe(undefined);
  });

});