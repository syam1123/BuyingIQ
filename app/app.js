'use strict';

angular
        .module('BIQ', [
            'ngMaterial',
            'ngRoute',
            'BIQ.ProductList',
            'BIQ.productView'
            ])
        .config(['$routeProvider','$locationProvider','$provide', '$httpProvider', 'cfpLoadingBarProvider', function ($routeProvider,$locationProvider, $provide, $httpProvider, cfpLoadingBarProvider) {
                $routeProvider.when('/',
                    {redirectTo: '/'})
                .otherwise({
                    redirectTo: '/'
                });

        .directive('productView',function(){
            return{
                restrict : 'E',
                templateUrl : 'Manage_List/productView.html',
                controller: 'productViewCtrl'
            }
        })
