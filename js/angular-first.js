var app = angular.module("myapp", []);

app.controller("mycntrl", function($scope){
	var technologies = [
		{name:"c++", likes:0,disLikes:0},
		{name:"Javascript", likes:0,disLikes:0},
		{name:"Java", likes:0,disLikes:0}
	];
	$scope.technologies = technologies;

	$scope.increament = function(technology) {
		technology.likes++;
	}

	$scope.decreament = function(technology) {
		technology.disLikes++;
	}
});