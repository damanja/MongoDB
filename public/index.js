var NosFilms = angular.module('NosFilms', []);

function mainController($scope, $http) {
	$scope.formData = {};
	$http.get('/api/lesfilms').success(function(data) {
		$scope.lesfilms = data;
		console.log(data);
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});
	
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
/*
	$scope.afficher = function(){
		$http.post('/api/lesfilms',$scope.formData)
		.success(function(data){
			console.log("On a clicker sur le lien")
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	}*/
}
