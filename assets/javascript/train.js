
$(document).ready(function () {
    //Firebase initialization

    var config = {
        apiKey: "AIzaSyDLdipiGbu9gj1XtllJ4h-a5cSL2hal1b0",
        authDomain: "pavani-project-c7d6a.firebaseapp.com",
        databaseURL: "https://pavani-project-c7d6a.firebaseio.com",
        storageBucket: "pavani-project-c7d6a.appspot.com"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    //Function to display the ticking clock based on set interval
    var update = function () {
        $("#currentTime").text(moment().format('hh:mm:ss'));
    }
    setInterval(update, 1000);
    $("#train-name").focus();

    //Function called when a new train details are added and Submit is clicked   
    $("#Submit").on("click", function (event) {
        event.preventDefault();
        var trainName = $("#train-name").val().trim();
        var destination = $("#train-destination").val().trim();
        var firstTime = $("#train-departure").val().trim();
        var frequency = $("#train-frequency").val().trim();
        clearForm();
        populateTable(trainName, destination, firstTime, frequency);


    });
function clearForm()
{
    $("#train-name").val("");
    $("#train-destination").val("");
    $("#train-departure").val("");
    $("#train-frequency").val("");
}
    //Function to populate the train details
    function populateTable(trainName, destination, firstTime, frequency) {
        var tName = trainName;
        var Dest = destination;
        var startTime = firstTime;
        var frequency = frequency;
        var firstTimeConverted = moment(startTime, "HH:mm").subtract(1, "years");
        var currentTime = moment().format("HH:mm");
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        var tRemainder = diffTime % frequency;
        var minutesAway = frequency - tRemainder;
        var arrivalNext = moment().add(minutesAway, "minutes");
        var nextArrival = moment(arrivalNext).format("HH:mm A");
        database.ref("TrainData").push(
            {
                trainName: tName,
                destination: Dest,
                frequency: frequency,
                nextArrival: nextArrival,
                minutesAway: minutesAway
            });


        

    }
 database.ref("TrainData").on('child_added', function(snapshot) {
      console.log("Entered child added function");  
    
       var tName = snapshot.val().trainName;
       var dest = snapshot.val().destination;
       var frequency = snapshot.val().frequency;
       var nextArrival =  snapshot.val().nextArrival;
       var minutesAway = snapshot.val().minutesAway;
       console.log("The train name is " + tName);
       console.log("The Destination is "+dest);
       console.log("The frequency is "+frequency);
       console.log("Next Arrival of the train is "+nextArrival);
       console.log("Minutes Away is "+minutesAway);
       $("#trainTable").append("<tr><td>"+tName+"</td><td>"+dest+"</td><td>"+frequency+"</td></td><td>"+nextArrival+"</td></td><td>"+minutesAway+"</td></tr>");
         
    
     
}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  }); 
}); 