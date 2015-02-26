donutRpg.factory("SuspectsFactory", function SuspectsFactory($state) {
  var factory = {};
  factory.suspects = [
    {name: "Tyler", guilty: false},
    {name: "Gabe", guilty: false},
    {name: "Ron", guilty: false},
    {name: "Jay", guilty: false}
  ];

  factory.commitCrime = function() {
    var guiltyIndex = Math.floor(Math.random() * 4);
    factory.suspects[guiltyIndex].guilty = true;
  };


  // below should probably be removed at some point:
  factory.fingerGuilty = function() {
    var perpetrator = "";
    factory.suspects.forEach(function(suspect) {
      if (suspect.guilty) {
        perpetrator = suspect.name;
      }
    });
    return perpetrator;
  };

  return factory;
});


// courseRoster.factory('UtilitiesFactory', function() {
//   return {
//     findById: function(collection, id) {
//       for (var i = 0; i < collection.length; i++) {
//         if (collection[i].id === parseInt(id)) {
//           return collection[i];
//         }
//       }
//       return null;
//     }
//   };
// });
