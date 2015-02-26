var donutRpg = angular.module('donutRpg', ['ui.router']);

donutRpg.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: 'DetectiveCtrl'
  });

  $stateProvider.state('start', {
    url: "/start",
    templateUrl: "partials/start.html",
    controller: 'DetectiveCtrl'
  });

  $stateProvider.state('stop1-true', {
    url: "/stop1",
    templateUrl: "partials/stop1-true.html",
    controller: 'DetectiveCtrl'
  });

  $stateProvider.state('stop1-false', {
    url: "/stop1",
    templateUrl: "partials/stop1-false.html",
    controller: 'DetectiveCtrl'
  });

  $stateProvider.state('final-countdown', {
    url: "/final-countdown",
    templateUrl: "partials/final-countdown.html",
    controller: 'SuspectsCtrl'
  });
});
