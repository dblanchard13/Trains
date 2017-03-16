

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

  		var $name = $("#train-Input").val().trim();
  		var $destination = $("#destination-Input").val().trim();
  		var $arrival = $("#arrival-Input").val().trim();
  		var $freq = $("#freq-Input").val().trim();

  		var uTrain = {
  		uName: $name,
  		uDestination: $destination,
  		uArrival: $arrival,
  		uFreq: $freq
  		};

  		database.ref().push(uTrain);

  		alert("Train Succesfully Added")

  		$("#train-Input").val("");
  		$("#destination-Input").val("");
  		$("#arrival-Input").val("");
  		$("#freq-Input").val("");

  		return false;

   });

  
  	database.ref().on("child_added", function(childSnapshot){

  		console.log(childSnapshot.val());
 	 
  		var tName = childSnapshot.val().uName;
  		var tDestination = childSnapshot.val().uDestination;
  		var tArrival = childSnapshot.val().uArrival;
  		var tFreq = childSnapshot.val().uFreq;

  		// console.log(tName);
  		// console.log(tDestination);
  		// console.log(tArrival);



  		var momentTime = moment(tArrival, "HH:mm");
  		console.log(momentTime)

  		var currentTime = moment();
  		var diffTime = moment().diff(moment(momentTime), "minutes");
  		var tRemainder = diffTime % tFreq;
 		console.log(tRemainder);

 		// console.log(tFreq);
 		// console.log(diffTime);

  		var minsAway =	tFreq - tRemainder;
  		var nextTrain = moment().add(minsAway, "minutes");
  		var nextTrainMoment = moment(nextTrain).format("hh:mm a");
  		// console.log(minsAway);

  		// var row = $("<tr>");
  		// row.append("<td>" + childSnapshot.val().tName + "</td>");
  		// row.append("<td>" + childSnapshot.val().tDestination + "</td>");
  		// row.append("<td>" + childSnapshot.val().tFreq + "</td>");
  		// row.append("<td>" + nextTrainMoment + "</td>");
  		// row.append("<td>" + minsAway + "</td>" + "</tr>");
  		// $("#table").append(row);


  		  $("#table > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" +
 	 		 tFreq + "</td><td>" + nextTrainMoment + "</td><td>" + minsAway + "</td></tr>");
	
  	});

  

// console.log("JS Link Check")