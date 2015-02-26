donutRpg.controller('SuspectsCtrl', function SuspectsCtrl($scope, $state, SuspectsFactory) {
  $scope.suspect = SuspectsFactory.suspect;
  $scope.SuspectsFactory = SuspectsFactory;
});
