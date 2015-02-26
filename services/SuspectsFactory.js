donutRpg.factory("SuspectsFactory", function SuspectsFactory($state) {
  var factory = {};
  factory.suspects = [
{name: "Tyler", guilty: false, item: "a nose ring with the world's grossest beardhair attached"},
    {name: "Gabe", guilty: false, item: 'a chunk of single-origin Panamanian chocolate'},
    {name: "Dustin", guilty: false, item: 'a lost little girl looking for her daddy'},
    {name: "Jay", guilty: false, item: 'an empty bottle of maple syrup'}
  ];

  factory.innocents = [];
  factory.perpetrator = {};

  factory.commitCrime = function() {
    var guiltyIndex = Math.floor(Math.random() * 4);
    factory.suspects[guiltyIndex].guilty = true;
    factory.suspects.forEach(function(suspect) {
      if (suspect.guilty) {
        factory.perpetrator = suspect;
      } else {
        factory.innocents.push(suspect);
      }
    });
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
