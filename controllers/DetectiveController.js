donutRpg.controller('DetectiveCtrl', function DetectiveCtrl($scope, $state, DetectiveFactory) {
  $scope.detective = DetectiveFactory.detective;
  $scope.DetectiveFactory = DetectiveFactory;
  $scope.possibleFavorites = ["Bacon Maple Bar","Memphis Mafia","Blueberry Cake","Old Dirty Bastard"];
  $scope.DetectiveFactory.inputtedFavorite = $scope.possibleFavorites[0];
});
