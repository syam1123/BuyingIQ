'use strict';

angular
        .module('BIQ', [
            'ngMaterial',
            'ngRoute',
            'BIQ.ProductList',
            'BIQ.productView'
            ])
        .directive('productView',function(){
            return{
                restrict : 'E',
                templateUrl : 'Manage_List/productView.html',
                controller: 'productViewCtrl'
            }
        })
