var app=angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/login', {templateUrl : 'partials/login.html'})
	.when('/dash', {templateUrl : 'partials/dash.html'})
	.when('/showUser/:userId',{templateUrl:'partials/showUser.html'})
	.when('/showTopic/:id',{templateUrl:'partials/showTopic.html'})
	.otherwise({redirectTo:'/login'})
});