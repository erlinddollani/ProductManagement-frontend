'use strict';

angular.module('Commit.products.routes', [])
	.config(function ($stateProvider) {
		$stateProvider
			.state('Commit.products', {
				url: '/products',
				templateUrl: '../../views/productList/index.html',
				controller: 'productListController',
        pageTitle: 'Product List'
      });
	});
