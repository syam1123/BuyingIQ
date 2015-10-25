'use strict'

angular.module('BIQ.productVIew', ['ngRoute', 'BIQ.ProductList'])
	.controller('productViewCtrl',['$scope', 'Products',
		function() {
			$scope.callFilter = function(){
	            var q = $scope.q,
	                tags = $scope.tags,
	                page = $scope.page,
	                facet = $scope.facet;
	        Products.getProductList({
	            q, tags, page, facet}, function(data){
	            $scope.product_list = JSON.parse(angular.toJson(data));
	        });
	    }

   		$scope.callFilter();
	}])
