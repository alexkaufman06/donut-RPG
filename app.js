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

  // $stateProvider.state('courses.students', {
  //   url: "/:courseId",
  //   templateUrl: "partials/courses.students.html",
  //   controller: 'StudentsCtrl'
  // });
});
