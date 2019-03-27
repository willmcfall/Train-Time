
$(document).ready(function () {

    // initialize Firebase
    var config = {
      apiKey: "AIzaSyAYntRzS0vKDkryKrFqQHrKO7YiAeCKnmw",
      authDomain: "billable-hours-d6c6a.firebaseapp.com",
      databaseURL: "https://billable-hours-d6c6a.firebaseio.com",
      projectId: "billable-hours-d6c6a",
      storageBucket: "billable-hours-d6c6a.appspot.com",
      messagingSenderId: "421635929350"
    };
    firebase.initializeApp(config);

    // acces database
    firebase.database();
    



    $("#submit_button").on("click", function (event) {
        event.preventDefault();

        // accepts data in from the user and adds to the display
        var newTableRowDiv = $("<tr>");
        var name = $("#name").val().trim();
        console.log(name);
        var role = $("#role").val().trim();
        console.log(role);
        var startDate = $("#start_date").val();
        console.log(startDate);
        var hoursWorked = parseInt($("#hours_worked").val());
        console.log(hoursWorked);
        var hourlyRate = parseInt($("#hourly_rate").val());
        console.log(hourlyRate);
        var totalRate = parseInt(hoursWorked * hourlyRate);
        console.log(totalRate);



        // displays data through table format
        // newTableRowDiv.html("<td>" + name + "</td>" + "<td>" + role + "</td>" + "<td>" + startDate + "</td>" + "<td>" + hoursWorked + "</td>" + "<td>" + hourlyRate + "</td>" + "<td>" + totalRate + "</td>");
        // $("tbody").append(newTableRowDiv); 
    });

});




