var Hero_List = angular.module("Hero_List", ['angularUtils.directives.dirPagination']);

Hero_List.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('dirPagination.tpl.html');
}).controller('List', function($scope, $http) {
  $scope.heros = []
  $scope.search = function () {
    if ($scope.filter == ''){
      var data = { 
        apikey: "59e7519bf8b3d2546d15e89e60dabc44",
        nameStartsWith: $scope.filter,
        limit: 100
      }
    }else{
      var data = { 
        apikey: "59e7519bf8b3d2546d15e89e60dabc44",
        nameStartsWith: $scope.filter,
        limit: 100
      }
    }
    $http({
      method: 'GET',
      url: 'http://gateway.marvel.com/v1/public/characters',
      params: data
    }).then(function successCallback(response) {
      $scope.heros = response.data.data.results
    }, function errorCallback(response) {
    });
  }
  $scope.order_by = function () {
    if ($scope.filter == ''){
      var data = { 
        apikey: "59e7519bf8b3d2546d15e89e60dabc44",
        nameStartsWith: $scope.filter,
        limit: 100,
        orderBy: $scope.order
      }
    }else{
      var data = { 
        apikey: "59e7519bf8b3d2546d15e89e60dabc44",
        nameStartsWith: $scope.filter,
        limit: 100,
        orderBy: $scope.order
      }
    }
    $http({
      method: 'GET',
      url: 'http://gateway.marvel.com/v1/public/characters',
      params: data
    }).then(function successCallback(response) {
      $scope.heros = response.data.data.results
    }, function errorCallback(response) {
    });
  }
  $scope.select_comic = function (comic) {
    $http({
      method: 'GET',
      url: comic.resourceURI,
      params:{
        apikey: "59e7519bf8b3d2546d15e89e60dabc44",
      }
    }).then(function successCallback(response) {
      console.log(response.data.data.results)
      $scope.comic = response.data.data.results[0]
    }, function errorCallback(response) {
    });
  }
  $http({
    method: 'GET',
    url: 'http://gateway.marvel.com/v1/public/characters',
    params: { 
      apikey: "59e7519bf8b3d2546d15e89e60dabc44",
      limit: 100
    }
  }).then(function successCallback(response) {
    $scope.heros = response.data.data.results
    console.log($scope.heros)
  }, function errorCallback(response) {
  });
});

document.getElementById('part-one').addEventListener('DOMSubtreeModified', function () {
  $('#part-two').height($('#part-one').height());
}, false);
