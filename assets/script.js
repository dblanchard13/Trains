

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

   });

  	database.ref().on("value", function(snapshot){

  		// console.log(snapshot.val());
  		// console.log(snapshot.val().uName);
  		// console.log(snapshot.val().uDestination);
  		// console.log(snapshot.val().uArrival);
  		// console.log(snapshot.val().uFreq);


  		//Write to the Table

  	    // $("#train-Input").html(snapshot.val().uName);
  		// $("#destination-Input").html(snapshot.val().uDestination);
  		// $("#arrival-Input").html(snapshot.val().uArrival);
  		// $("#freq-Input").html(snapshot.val().uFreq);	

  	});


  

  	var firstRowTds = $("table")
  	.children()
  	.eq(1)
	.children("tr")
	.eq(0)
	.children("td")

	console.log(firstRowTds)

	firstRowTds.eq(0).text("one")
	firstRowTds.eq(1).text("two")
	firstRowTds.eq(2).text("three words")
	firstRowTds.eq(3).text("for you")
	firstRowTds.eq(4).text("i love you")


  	

 
      // var firstRowTds = $("table") // Get a reference to the table as a jQuery object

      //   .children() // Get all of table's immediate children as an array
      //   .eq(1) // Get element at the first index of this returned array (the <tbody>)
      //   .children("tr") // Get an array of all <tr> children inside the returned <tbody>
      //   .eq(0) // Get the 0th child of this returned array (the first <tr>)
      //   .children("td"); // Get an array of all <td> children inside the returned <tr>
      // // Setting the inner text of each <td> in the firstRowTds array

      // firstRowTds.eq(0).text(response.Title);
      // firstRowTds.eq(1).text(response.Year);
      // firstRowTds.eq(2).text(response.Actors);
  





console.log("JS Link Check")