$(document).ready(function () {
    var currentTime = moment();
    var timeDisplay = moment(currentTime).format("hh:mm");
    console.log("The Current time is "+timeDisplay);
   // $("#train-name").setFocus();
    $(".currentTime").text(timeDisplay);

 $('#submit').on('click', function () {
    var trainName = $("#train-name").text().trim();
    console.log("Train name is " + trainName);
    var destination = $("#train-destination").text().trim();
    console.log("Train Destination is " + destination);
    var firstTime = $("#train-departure").text().trim();
    console.log("Train first time is " + firstTime);
    var frequency = $("#train-frequency").text().trim();
    console.log("Train frequency is " + frequency); 


  }); 
}); 