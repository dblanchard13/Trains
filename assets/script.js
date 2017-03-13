

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyApwyc_qALVAmOBdLStjI0EPp5RoazKIIk",
    authDomain: "test-87d75.firebaseapp.com",
    databaseURL: "https://test-87d75.firebaseio.com",
    storageBucket: "test-87d75.appspot.com",
    messagingSenderId: "388041163144"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  $("#submit-Btn").on("click", function(){
  		event.preventDefault();

  		var name = $("#train-Input").val().trim();
  		var destination = $("#destination-Input").val().trim();
  		var arrival	= $("#arrival-Input").val().trim();
  		var freq = $("#freq-Input").val().trim();


  		var newTrain = {
  			uName: name,
  			uDestination: destination, 
  			uArrival: arrival,
  			uFreq: freq
  		};

  		database.ref().set(newTrain)

  		console.log(newTrain)
  });

 
console.log("JS Link Check")