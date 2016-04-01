var app = angular.module('myAPP', ['ngRoute', 'ui.grid', 'ui.grid.pagination', 'angular-loading-bar', 'ui.grid.autoResize']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'searchController',
        templateUrl: 'views/search.html'

    })
    .otherwise({
        redirectTo: '/'
    });


});