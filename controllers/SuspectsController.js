donutRpg.controller('SuspectsCtrl', function SuspectsCtrl($scope, $state, SuspectsFactory) {
  $scope.suspect = SuspectFactory.suspect;
  $scope.SuspectFactory = SuspectFactory;
});
