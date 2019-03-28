// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new trains - then update the html + update the Firebase database
// 3. Create a way to retrieve trains from the train database.
// 4. Create a way to calculate when the next train wil be arriving based on start time, frequency, and current time
// 5. Create a way to calculate minutes to the next train based on difference between next train time and curren time
// 6. Update user interface to show time to arrival and time until next train every minute
// 7. Add button to allow user to add or remove trains
// 8. Add authentication feature that checks for Google or Github logins

$(document).ready(function () {

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
  $("#submit_button").on("click", function (event) {

    // Clears default settings
    event.preventDefault();

    // Grabs user input
    var trainName = $("#train_name").val().trim();
    var trainDestination = $("#destination").val().trim();
    var trainStart = moment($("#start_time").val().trim(), "HHmm").format("HHmm");
    var trainEnd = moment($("#end_time").val().trim(), "HHmm").format("HHmm");
    var trainFrequency = $("#frequency").val().trim();

    // Creates local "temporary" object for holding train data
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      start: trainStart,
      end: trainEnd,
      frequency: trainFrequency
    };

    // Uploads employee data to the database
    database.ref().push(newTrain);

    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.start);
    console.log(newTrain.end);
    console.log(newTrain.frequency);

    alert("Train successfully added");

    // Clears all of the text-boxes
    $("#train_name").val("");
    $("#destination").val("");
    $("#start_time").val("");
    $("#end_time").val("");
    $("#frequency").val("");
  });

  // 3. Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function (childSnapshot) {

    console.log(childSnapshot.val());

    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainStart = childSnapshot.val().start;
    var trainEnd = childSnapshot.val().end;
    var trainFrequency = childSnapshot.val().frequency;

    // Train Info
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainStart);
    console.log(trainEnd);
    console.log(trainFrequency);

    // Creates variable for start time
    var start = moment(trainStart, 'HH:mm').subtract(1, "years");
    var end = moment(trainEnd, 'HH:mm').subtract(1, "years");
    console.log(start);
    console.log(end);

    // Creates a variable for the current time and finds the value in the array in which it is in between
    var currentTime = moment();
    console.log(currentTime);

    // Creates a variable that calculates the difference in time from start time until curren time
    var diffTime = moment().diff(moment(start), "minutes");

    // Creates a variable that provides the remainder from dividing difference from train frequency
    var tRemainder = diffTime % trainFrequency;

    // Creates a variable the stores the number of minutes until the next train
    var tMinutesTillTrain = trainFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Creates a variable the stores the number of minutes until the next train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    var formatedNextTrain = moment(nextTrain).format("hh:mm");

    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainDestination),
      $("<td>").text(trainStart),
      $("<td>").text(trainEnd),
      $("<td>").text(trainFrequency),
      $("<td>").text(formatedNextTrain),
      $("<td>").text(tMinutesTillTrain),
    );

    // Append the new row to the table
    $("tbody").append(newRow);
  });

});
// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use meets this test case
