donutRpg.controller('DetectiveCtrl', function DetectiveCtrl($scope, $state, DetectiveFactory, SuspectsFactory) {
  $scope.detective = DetectiveFactory.detective;
  $scope.suspects = SuspectsFactory.suspects;
  $scope.DetectiveFactory = DetectiveFactory;
  $scope.SuspectsFactory = SuspectsFactory;
  $scope.possibleFavorites = ["Bacon Maple Bar","Memphis Mafia","Blueberry Cake","Old Dirty Bastard"];
  $scope.DetectiveFactory.inputtedFavorite = $scope.possibleFavorites[0];

});
