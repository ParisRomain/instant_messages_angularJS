angular.module('mike.controllers', [])

.controller('areacodeCtrl', function($scope, $state, $ionicModal) {

})

.controller('signCtrl', function($scope, $state, Login, $window) {

    $scope.data = {};
    $scope.login = function() {
      if ($scope.data.phone !== undefined && $scope.data.password !== undefined) {
        if ($scope.data.phone === undefined) {
          console.log("veuillez entrer votre numéro de téléphone");
        } else if ($scope.data.password === undefined) {
          console.log('veuillez entrer votre mot de passe');
        } else {
          if ($scope.data.phone == "0660282324" && $scope.data.password == 'MIKE') {
            $state.go('tab.messages');
            console.log("connexion validée");
          }
        }
      }
      console.log($scope.data);
    }
    localStorage.setItem("0660282324", "MIKE");
    $scope.goBack = function() {
      $window.history.back();
    }
    $scope.register = function() {
      if ($scope.data.phone === undefined) {
        console.log("vous devez renseiger votre numéro");
      } else if ($scope.data.email === undefined) {
        console.log("vous devez renseigner votre adresse email");
      } else if ($scope.data.password === undefined){
        console.log("vous devez renseigner un mot de passe ");
      } else if ($scope.data.repassword === undefined) {
        console.log("vous devez enter à nouveau votre mot de passe");
      } else {
        if ($scope.data.password == $scope.data.repassword) {
          // LoginUser.set($scope.data);
          localStorage.setItem("user",JSON.stringify($scope.data));
            $state.go('tab.messages');
        }
      }
    }
})

.controller('tabCtrl', function($scope, $state) {

})

.controller('messagesCtrl', function($scope, $state, $ionicPopup) {

})

.controller('messagesDetail', function($scope, $state) {

})

.controller('sendLocation', function($scope, $state) {

})

.controller('messagesCall', function($scope, $state, $ionicModal) {

})

.controller('contactsCtrl', function($scope, $state) {

})

.controller('contactsRecommended', function($scope, $state) {

})

.controller('contactsAdd', function($scope, $state) {

})

.controller('contactsSearch', function($scope, $state, $stateParams) {

})

.controller('contactsUpdate', function($scope, $state) {

})

.controller('contactsNearby', function($scope, $state) {

})

.controller('nearbyLocation', function($scope, $state) {

})

.controller('contactsInvite', function($scope, $state) {

})

.controller('groupCtrl', function($scope, $state) {

})

.controller('groupCreate', function($scope, $state) {

})

.controller('groupAdd', function($scope, $state) {

})

.controller('groupView', function($scope, $state) {

})

.controller('groupDetail', function($scope, $state) {

})

.controller('settingsCtrl', function($scope, $state) {

})

.controller('changePasswordCtrl', function($scope, $state) {

})

.controller('searchCtrl', function($scope, $state) {

})
