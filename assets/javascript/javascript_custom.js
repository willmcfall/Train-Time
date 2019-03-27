// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new trains - then update the html + update the Firebase database
// 3. Create a way to retrieve trains from the train database.
// 4. Create a way to calculate when the next train wil be arriving based on start time, frequency, and current time
// 5. Create a way to calculate minutes to the next train based on difference between next train time and curren time
// 6. Update user interface to show time to arrival and time until next train every minute
// 7. Add button to allow user to add or remove trains
// 8. Add authentication feature that checks for Google or Github logins

// 1. Initialize Firebase
var config = {
  apiKey: "AIzaSyCCIFvXuFLBY9_ijuCZmV9ct_a6N_E7JUY",
  authDomain: "train-time-bce3e.firebaseapp.com",
  databaseURL: "https://train-time-bce3e.firebaseio.com",
  projectId: "train-time-bce3e",
  storageBucket: "train-time-bce3e.appspot.com",
  messagingSenderId: "569958278323"
};
firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding trains
$("#submit_button").on("click", function(event) {
  
  // Clears default settings
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train_name").val().trim();
  var trainDestination = $("#destination").val().trim();
  var trainStart = moment($("#start_time").val().trim(), "HHmm").format("HHmm");
  var trainFrequency = $("#frequency").val().trim();

  // Creates local "temporary" object for holding train data
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    start: trainStart,
    frequency: trainFrequency
  };

  // Uploads employee data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.start);
  console.log(newTrain.frequency);

  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train_name").val("");
  $("#destination").val("");
  $("#start_time").val("");
  $("#frequency").val("");
});

// 3. Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
  
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().desination;
  var trainStart = childSnapshot.val().start;
  var trainFrequency = childSnapshot.val().frequency;

  // Employee Info
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainStart);
  console.log(trainFrequency);

  // Prettify the employee start
  // Contiue coding here!!!!
  var empStartPretty = moment.unix(empStart).format("MM/DD/YYYY");

  // To calculate the months worked
  var empMonths = moment().diff(moment(empStart, "X"), "months");
  console.log(empMonths);

  // Calculate the total billed rate
  var empBilled = empMonths * empRate;
  console.log(empBilled);

  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(empName),
    $("<td>").text(empRole),
    $("<td>").text(empStartPretty),
    $("<td>").text(empMonths),
    $("<td>").text(empRate),
    $("<td>").text(empBilled)
  );

  // Append the new row to the table
  $("#employee-table > tbody").append(newRow);
});

// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use meets this test case
