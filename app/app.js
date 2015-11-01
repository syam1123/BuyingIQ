'use strict';

angular
        .module('BIQ', [
            'ui.router'
            ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("state1");
            $stateProvider
                .state('state1', {
                  url: "/state1",
                  templateUrl: "view/searchResult.html",
                  controller: 'searchResultCtrl'
                })
        })  
        .directive('productView',function(){
            return{
                restrict : 'E',
                templateUrl : 'Manage_List/productView.html',
                controller: 'productViewCtrl'
            }
        })
