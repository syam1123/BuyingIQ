'use strict'

angular.module('BIQ.ProductList',['BIQ', 'ngResource'])
		.factory('Products', Products);
		Products.$inject = ['$http', '$resource'];
		function Products($http, $resource) {
		return $resource('/http:/api.buyingiq.com/v1/search/?', {
			q : '@q',
			tags : '@ctags',
			facet : '@facet',
			page : '@page',
		}, {
			getProductList: {
				method: 'GET',
				isArray: true,
				transformResponse: function(data, headers){
					data = JSON.parse(data).products;
					return data;
				}
			}
		}, {stripTrailingSlashes: true})
	}
