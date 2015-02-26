donutRpg.factory('DetectiveFactory', function DetectiveFactory($state) {
  var factory = {};
  factory.detective = {};
  factory.addDetective = function() {
    factory.detective.name = factory.inputtedName;
    factory.detective.favorite = factory.inputtedFavorite;
    factory.detective.donutLevel = 2;
    $state.go("start");
  }
  return factory;
});
