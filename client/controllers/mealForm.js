app.controller('MealForm', ['$scope', '$http', '$state', 'MealForm', function($scope, $http, $state, MealForm) {

  $scope.entriesOnPage = [];

  $scope.meal = {};
  $scope.meal.entries = [];
  $scope.meal.name = 'Pizza';
  $scope.meal.date = '10/16/2015';
  $scope.meal.location = 'Tenochtitlan';
  // TODO : Add rating input field
  $scope.meal.rating = 0;
  $scope.meal.notes = 'Meal was out of this world';
  // TODO : Add image upload input field functionality
  $scope.meal.image = 'http://i.imgur.com/n104JLy.jpg';

  $scope.newMeal = function(){
    return MealForm.newMeal
  }
  
  // Creates a new entry to be displayed on form
  $scope.addEntry = function() {
    // console.log('Adding entry');
    $scope.entriesOnPage.push(1);
  };

  // Attaches an entry to this meal
  $scope.saveEntry = function(entry) {
    // console.log('Saving entry:', entry);
    return $scope.meal.entries.push(entry) - 1;
  };

  // Updates an existing entry in this meal
  $scope.updateEntry = function(position, entry) {
    // console.log('Updating entry:', position);
    $scope.meal.entries[position] = entry;
  };


  // Has MealForm model send the meal to the server
  $scope.addMeal = function() {
    var date = +new Date($scope.meal.date);
    var meal = Object.assign({}, $scope.meal);
    meal.date = Math.floor(date / 1000);

    MealForm.addMeal(meal);
  };
}]);
