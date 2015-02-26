donutRpg.factory("SuspectsFactory", function() {
  var factory = {};
  factory.suspects = [
    {name: "Tyler", guilty: false},
    {name: "Gabe", guilty: false},
    {name: "Ron", guilty: false},
    {name: "Jay", guilty: true}
  ];

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
