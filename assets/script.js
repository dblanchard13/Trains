// While it may not seem imperative for smaller programs, 
// you should get in the habit of wrapping your js code in either a 

// $(document).ready(function(){
//  // code goes here
// })

// or an IIFE (immediately invoked function expression)

// ;(function(){
//  // code goes here
// })()

// One of the most important reasons for that is security - because right now your global variables (ie `database`)
// can be tampered with through the console by a malicious visitor to your train schedule app 😮


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

      // you generally want to stay away from using `alert` statements. Instead, you can just update the 
      // html with the new train to signal that it was successfully added
  		// alert("Train Succesfully Added")

  		$("#train-Input").val("");
  		$("#destination-Input").val("");
  		$("#arrival-Input").val("");
  		$("#freq-Input").val("");

      // Not sure what the intention was for this line, but it can be safely removed without breaking functionality
  		// return false;

   });

  	database.ref().on("child_added", function(childSnapshot){
      // it's best practice to remove console.log statements from your production code
  		// console.log(childSnapshot.val());
 	 
  		var tName = childSnapshot.val().uName;
  		var tDestination = childSnapshot.val().uDestination;
  		var tArrival = childSnapshot.val().uArrival;
  		var tFreq = childSnapshot.val().uFreq;

  		// console.log(tName);
  		// console.log(tDestination);
  		// console.log(tArrival);



  		var momentTime = moment(tArrival, "HH:mm");
  		// console.log(momentTime)

  		var currentTime = moment();
  		var diffTime = moment().diff(moment(momentTime), "minutes");
  		var tRemainder = diffTime % tFreq;
 		// console.log(tRemainder);

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

      // instead of concatenating and appending a large string to the table body
      // it's easier to read and understand if you follow a pattern not dissimilar
      // to the one you were using above this that's commented out. And, speaking
      // of comments, you generally want to remove commented out code that's not being used.

      // Another option would be to create an array of data points you want to put in a row and 
      // loop over it like so:

      // var tableRow = $('<tr>')
      // var rowElements = [tName, tDestination, tFreq, nextTrainMoment, minsAway]
      
      // rowElements.forEach(function(element) {
      //   var td = $('<td>')
      //   td.text(element)
      //   tableRow.append(td)
      // })
      
      // $("#table > tbody").append(tableRow);

  		  $("#table > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" +
 	 		 tFreq + "</td><td>" + nextTrainMoment + "</td><td>" + minsAway + "</td></tr>");
	
  	});

  

// console.log("JS Link Check")