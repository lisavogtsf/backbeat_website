/* controllers */

var BackbeatControllers = angular.module('BackbeatControllers', []);

BackbeatControllers.controller('TitleCtrl', ['$scope', '$http', function ($scope, $http){
  $scope.title = "Backbeat Networks";

  // control show/hide of social media bar
  $scope.socialMedia = false;
  // $scope.socialMedia = true;
  $scope.showSocialMedia = function () {
    // animate fade in/out, controlled by CSS
    $scope.socialMedia = true;
  }
  $scope.hideSocialMedia = function () {
    $scope.socialMedia = false;
  }

}]);

// Angular code for home page, famous integration here?
BackbeatControllers.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http){
  console.log("from home controller");

  // // planning to use homeReady as a variable that stores the state of the home page
  // //  it starts out as false, but it should then become true ASAP
  // // or run a check to see if there is a cookie for having been there
  $scope.homeReady = false;
  // $scope.homeReady = true;

}]);

// Angular code for About page
BackbeatControllers.controller('AboutCtrl', ['$scope', '$http', function ($scope, $http){
  console.log("from about controller");
  
  // $scope.company controls the initial state of the about page, company vs. individuals
  // functions below are for switching between company and individuals in response to clicks
  $scope.company = true;
  // // for testing
  // $scope.company = false;

  $scope.selectIndividuals = function(){
    $scope.company = false;
  };  
  $scope.selectCompany = function(){
    $scope.company = true;
  };

  // $scope.chosen determines whether "Please choose" or an indvidual's details appear
  // initial state should be empty string
  // also determines which person is foregrounded
  $scope.chosen = "";
  // $scope.chosen = "will";
  $scope.chooseIndividual = function(individualID) {
    $scope.chosen = individualID;
    console.log("chosen: ", $scope.chosen);
  };

  $scope.haiku_index = 0;
  $scope.nextHaiku = function () {
    $scope.haiku_index += 1;
  }; 

  // get individual information from json file
  // serve it to the page in the $scope.individuals object
  // working to try to scale individuals
  $http.get('assets/individuals.json').success(function(data){
    $scope.individuals = data;
  });

}]);

// contact page controller
BackbeatControllers.controller('ContactCtrl', ['$scope', '$http', function ($scope, $http){
  console.log("from contact controller");

  // // initializing state variables for Contact page (possibly over-commented)
  // // postcard state, is front showing or back?
  // $scope.postcardFront = false;
  $scope.postcardFront = true;

  // // has the postcard been sent?
  $scope.postcardSent = false;
  // $scope.postcardSent = true;

  // // start with a blank postcard
  $scope.postcard = {}; 

  // // initial assumption is that the postcard is ok/not invalid
  $scope.postcardError = false;
  $scope.topErrorPointer = false;
  $scope.bottomErrorPointer = false;
  // // when the user clicks, clear errors
  $scope.clearPostcardErrors = function () {
    $scope.postcardError = false;
    $scope.topErrorPointer = false;
    $scope.bottomErrorPointer = false;
  };

  // // start with no error, empty string, then may need to assign specific errorString
  $scope.errorString = "";
  // $scope.errorString = "message";
  $scope.errorMessage = "";

  // starts with a random tagline, greeting & closing, rotates through
  $scope.tagline = [
    "Just increase the gravy",
    "Nothing WEIRD is going to happen",
    "Once more with feeling",
    "Do not feed trolls"
    ];
  $scope.taglineIndex = Math.floor((Math.random() * 10)) % $scope.tagline.length;
  console.log("tagline index ", Math.floor((Math.random() * 10)) % $scope.tagline.length);

  // greeting options
  // needs to be filled out, images appropriately named, ordered
  // uncomment HTML, correct CSS for positioning
  $scope.greeting = [
    "Dear Sweet Backbeat",
    "My Sweet Backbeat",
    "My Dearest Backbeat",
    "My Darling Backbeat",
    "Everdearest Backbeat",
    "Salutations Backbeat",
    "Greetings Backbeat"
  ];
  $scope.greetingIndex = Math.floor((Math.random() * 10)) % $scope.greeting.length;
  console.log("greeting index ", Math.floor((Math.random() * 10)) % $scope.greeting.length);

  // closing options
  $scope.closing = [
    "Forevermore Yours,",
    "Quite Possibly Yours,",
    "Completely Yours,",
    "Magnificently Yours,",
    "Definitely Yours,"
  ];
  $scope.closingIndex = Math.floor((Math.random() * 10)) % $scope.closing.length;
  console.log("closing index: ", Math.floor((Math.random() * 10)) % $scope.closing.length);

  // flipping functions
  $scope.showFront = function () {
    // this will be animated as a flip
    $scope.postcardFront = true;
    $scope.postcardError = false;
    $scope.topErrorPointer = false;
    $scope.bottomErrorPointer = false;    
  }
  $scope.showBack = function () {
    // this will be animated as a flip
    $scope.postcardFront = false;
  }

  /*************************
   * sendPostcard function
   **************************
   * function to send the postcard, includes various validations
  */ 
  $scope.sendPostcard = function () {

    // review the status of the postcard after send is selected, before validation
    console.log("Postcard status just after tried to send/before validation***");
    console.log("postcard object ", $scope.postcard);
    console.log("postcard message ", $scope.postcard.message);
    console.log("postcard name ", $scope.postcard.name);
    console.log("postcard email ", $scope.postcard.email);
    console.log("$scope.postcardError? ", $scope.postcardError);

    // VALIDATION
    // check to see whether all (msg & email) fields are populated
    // if so go ahead and send
    // else let user know they need to fill out fields

    // pre-validation
      console.log("are all 3 fields are populated? postcard AND all fields ***")
      console.log($scope.postcard.message && $scope.postcard.name && $scope.postcard.email);

    // validate that message and email fields are filled in
    if ($scope.postcard.message && $scope.postcard.email) {

      // all needed fields are filled in, now check if they put a valid email
      var emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/;
      if (emailRegex.test($scope.postcard.email)){
        // success = valid email address
        console.log("valid email address");
      
        $scope.postcardError = false;
        $scope.topErrorPointer = false;
        $scope.bottomErrorPointer = false;
        console.log("sending postcard");
        $scope.postcardSent = true;   
        // setting postcardSent to true
        // shows image of sent postcard & the "Send Another" button
        // uses ng-show/hide postcardSent true 

        // get postcard contents 
        console.log("postcard object ", $scope.postcard);
        console.log("postcard message ", $scope.postcard.message);
        console.log("postcard name ", $scope.postcard.name);
        console.log("postcard email ", $scope.postcard.email);

        // // send postcard contents to backbeat
        // // use ajax/post API call, give it the postcard object
        // // no room here for a method parameter?? 
        // // written as "shortcut method"
        // $http.post('../ajax.py', $scope.postcard).success(function(response){
        //   // do I need to write the method here?
        // });
        // // Simple POST request example (passing data) :
        // $http.post('../ajax.py', $scope.postcard).
        //   success(function(data, status, headers, config) {
        //     // this callback will be called asynchronously
        //     // when the response is available
        //   }).
        //   error(function(data, status, headers, config) {
        //     // called asynchronously if an error occurs
        //     // or server returns response with an error status.
        //   });

      } else {
        // not a valid email, even though necessary fields are filled out
        console.log("Please enter a valid email, not ", $scope.postcard.email)
        $scope.errorString = "email";
        $scope.errorMessage = "Please enter valid email address";
        $scope.postcardError = true;
        $scope.topErrorPointer = false;
        $scope.bottomErrorPointer = true;
        console.log("top, bottomErrorPointer? ", $scope.topErrorPointer, $scope.bottomErrorPointer);
      }
    } else {
      // not all fields are filled out
      if (!$scope.postcard.message && !$scope.postcard.email) {
        // message AND email fields are empty, give proper error
        console.log("both message and email are empty");
        $scope.errorString = "all";
        $scope.errorMessage = "Please fill out all fields";
        $scope.postcardError = true;
        $scope.topErrorPointer = true;
        $scope.bottomErrorPointer = true;
        console.log("Multiple fields are empty, $scope.postcardError ", $scope.postcardError);
        console.log("top, bottomErrorPointer? ", $scope.topErrorPointer, $scope.bottomErrorPointer);
      }
      else if (!$scope.postcard.message) {
        // only missing message
        console.log("message is empty");
        $scope.errorString = "message";
        $scope.errorMessage = "Please add a message";
        $scope.postcardError = true;
        $scope.topErrorPointer = true;
        $scope.bottomErrorPointer = false;
        console.log("Message field is empty, $scope.postcardError ", $scope.postcardError);
        console.log("top, bottomErrorPointer? ", $scope.topErrorPointer, $scope.bottomErrorPointer);

      } else if (!$scope.postcard.email) {
        // only missing email
        console.log("email is empty");
        $scope.errorString = "email";
        $scope.errorMessage = "Please enter valid email address";
        $scope.postcardError = true;
        $scope.topErrorPointer = false;
        $scope.bottomErrorPointer = true;
        console.log("email field is empty, $scope.postcardError ", $scope.postcardError);
        console.log("top, bottomErrorPointer? ", $scope.topErrorPointer, $scope.bottomErrorPointer);
      }
    }
  }

  $scope.anotherPostcard = function () {
  // clears out $scope.postcard, increments taglines/closings
    console.log("prepping to send another postcard");
    $scope.postcard = {};
    $scope.postcardFront = false;
    $scope.postcardSent = false;
    $scope.postcardError = false;

    // $scope.taglineIndex += 1;
    $scope.taglineIndex = ($scope.taglineIndex + 1) % $scope.tagline.length;
    // console.log("$scope.taglineIndex ", $scope.taglineIndex);
    // $scope.closingIndex += 1;    
    $scope.closingIndex = ($scope.closingIndex + 1) % $scope.closing.length;
    // console.log("$scope.closingIndex ", $scope.closingIndex);
  }

}]);