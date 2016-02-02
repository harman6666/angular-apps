var app = angular.module("instantSearch", []);
app.filter('searchFor', function(){

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

app.controller("InstantSearchController", function($scope){

	$scope.items = [
		{
			url: 'http://google.com/',
			title: '50 Must-have plugins for extending Twitter Bootstrap',
			image: 'http://lorempixel.com/100/100/'
		},
		{
			url: 'http://google.com/',
			title: 'Making a Super Simple Registration System With PHP and MySQL',
			image: 'http://lorempixel.com/100/100/'
		},
		{
			url: 'http://google.com/',
			title: 'Create a slide-out footer with this neat z-index trick',
			image: 'http://lorempixel.com/100/100/'
		},
		{
			url: 'http://google.com/',
			title: 'How to Make a Digital Clock with jQuery and CSS3',
			image: 'http://lorempixel.com/100/100/'
		},
		{
			url: 'http://google.com/',
			title: 'Smooth Diagonal Fade Gallery with CSS3 Transitions',
			image: 'http://lorempixel.com/100/100/'
		},
		{
			url: 'http://google.com/',
			title: 'Mini AJAX File Upload Form',
			image: 'http://lorempixel.com/100/100/'
		},
		{
			url: 'http://google.com/',
			title: 'Your First Backbone.js App – Service Chooser',
			image: 'http://lorempixel.com/100/100/'
		}
	];
})