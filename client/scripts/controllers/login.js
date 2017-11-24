'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
	.controller('LoginCtrl', function($scope, $http, $location) {

		//$scope.responseMessage = "No Response Message.";

		$scope.goToLogin = function() {
			document.getElementById('landingPage').hidden = 'true';
			document.getElementById('loginWrapper').removeAttribute('hidden');
		}

		$scope.createPost = function(data) {
			var dataObj = {};

			dataObj.email = data.email;
			dataObj.password = data.password;

			$http({
					method: 'POST',
					url: 'http://34.203.219.137/g4/api/login',
					data: dataObj,
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then(function(response) {
					//code to execute on success
					//$scope.responseMessage = "Status: " + response.status + " | Status Text: " + response.statusText;
					$location.path('/dashboard');
				})
				.catch(function(err) {
					//code to execute on error
					//$scope.responseMessage = "Status: " + err.status + " | Status Text: " + err.statusText;
				});
		};

		$scope.createPostRegister = function(data) {

			var dataObj = {};

			dataObj.email = data.regemail;
			dataObj.password = data.regpassword;
			dataObj.first = data.regfirst;
			dataObj.last = data.reglast;
			dataObj.org = data.regorg;
			//dataObj.level = data.reglevel;

			//$scope.responseMessage = dataObj;

			$http({
					method: 'POST',
					url: 'http://34.203.219.137/g4/api/register',
					data: dataObj,
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then(function(response) {
					//code to execute on success
					//$scope.responseMessage = "Status: " + response.status + " | Status Text: " + response.statusText;
					$location.path('/dashboard');
				})
				.catch(function(err) {
					//code to execute on error
					//$scope.responseMessage = "Status: " + err.status + " | Status Text: " + err.statusText;
				});
		};
	});