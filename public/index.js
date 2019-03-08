var ListeaFaire = angular.module('ListeaFaire', []);

function mainController($scope, $http) {
	$scope.formData = {};
/*	$http.get('/api/lesfilms').success(function(data) {
		$scope.lesfilms = data;
		console.log(data);
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});
	*/
	$scope.chercher = function() {
		$http.post('/api/lesfilms',$scope.formData)
		.success(function(data) {
			$scope.formData = {};
			$scope.lesfilms = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};
}
