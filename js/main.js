var Hero_List = angular.module("Hero_List", []);

Hero_List.controller('List', function($scope, $http) {
  var all_heros = []
  $scope.heros = []

  $http({
    method: 'GET',
    url: 'http://gateway.marvel.com/v1/public/characters',
    params: { 
      apikey: "59e7519bf8b3d2546d15e89e60dabc44",
      limit: "10",
    }
  }).then(function successCallback(response) {
    console.log(response.data.data.results);
    all_heros = response.data.data.results
    $scope.heros = response.data.data.results
  }, function errorCallback(response) {
    console.log(response.data);
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
});