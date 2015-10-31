'use strict';

angular
        .module('BIQ', [
            'ngMaterial',
            'ui.router',
            'BIQ.ProductList',
            'BIQ.productView'
            ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/view/searchResult");
            $stateProvider
                .state('state1', {
                  url: "/state1",
                  templateUrl: "view/searchResult.html"
                })
        })  
        .directive('productView',function(){
            return{
                restrict : 'E',
                templateUrl : 'Manage_List/productView.html',
                controller: 'productViewCtrl'
            }
        })
