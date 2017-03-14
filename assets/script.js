

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
  		var $arrival = moment($("#arrival-Input").val().trim();
  		var $freq = $("#freq-Input").val().trim();


  		var uTrain = {
  		uName: name,
  		uDestination: destination, 
  		uStart: start,
  		uFreq: freq
  		};

  		database.ref().push(uTrain);



  		alert("Train Succesfully Added")

  		$("#train-Input").val("");
  		$("#destination-Input").val("");
  		$("#arrival-Input").val("");
  		$("#freq-Input").val("");

   });

  
  	database.ref().on("child_added", function(){
  	console.log(childSnapshot.val());
 	 
  		var tName = childSnapshot.val().name;
  		var tDestination = childSnapshot.val().destination;
  		var tStart = childSnapshot.val().start;
  		var tFreq = childSnapshot.val().freq;


  		var nextTrain = 
  		var minsAway =

  		$("#table > tbody").append("<tr><td>" + tName "</td><td>" + tDestination + 
  		"</td><td>" + tFreq + "</td><td>" + nextTrain + "</td><td>" + minsAway + "</td></tr>");

  	});

  



  

 //  	var firstRowTds = $("table")
 //  	.children()
 //  	.eq(1)
	// .children("tr")
	// .eq(0)
	// .children("td")

	// console.log(firstRowTds)

	// firstRowTds.eq(0).text(snapshot.val().uName);
	// firstRowTds.eq(1).text(snapshot.val().uDestination);
	// firstRowTds.eq(2).text(snapshot.val().uFreq);
	// firstRowTds.eq(3).text()
	// firstRowTds.eq(4).text()
	
  	

 
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


      // append row to the HTML table - creation
// function appendRow() {
//     var tbl = document.getElementById('my-table'), // table reference
//         row = tbl.insertRow(tbl.rows.length),      // append table row
//         i;
//     // insert table cells to the new row
//     for (i = 0; i < tbl.rows[0].cells.length; i++) {
//         createCell(row.insertCell(i), i, 'row');
//     }
// }
 
// // create DIV element and append to the table cell
// function createCell(cell, text, style) {
//     var div = document.createElement('div'), // create DIV element
//         txt = document.createTextNode(text); // create text node
//     div.appendChild(txt);                    // append text node to the DIV
//     div.setAttribute('class', style);        // set DIV class attribute
//     div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
//     cell.appendChild(div);                   // append DIV to the table cell
// }

// delete table rows with index greater then 0
// function deleteRows() {
//     var tbl = document.getElementById('my-table'), // table reference
//         lastRow = tbl.rows.length - 1,             // set the last row index
//         i;
//     // delete rows with index greater then 0
//     for (i = lastRow; i > 0; i--) {
//         tbl.deleteRow(i);
//     }
// }

// append column to the HTML table
// function appendColumn() {
//     var tbl = document.getElementById('table'), // table reference
//         i;
//     // open loop for each row and append cell
//     for (i = 0; i < tbl.rows.length; i++) {
//         createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col');
//     }
// }
 
// // delete table columns with index greater then 0
// function deleteColumns() {
//     var tbl = document.getElementById('my-table'), // table reference
//         lastCol = tbl.rows[0].cells.length - 1,    // set the last column index
//         i, j;
//     // delete cells with index greater then 0 (for each row)
//     for (i = 0; i < tbl.rows.length; i++) {
//         for (j = lastCol; j > 0; j--) {
//             tbl.rows[i].deleteCell(j);
//         }
//     }
// }
  
  // $("#arrival-Input") + $("#freq-Input")

//  




console.log("JS Link Check")