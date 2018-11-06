
$(document).ready(function () {
    var update = function() {
     $("#currentTime").text(moment().format('hh:mm:ss'));
    }
     setInterval(update, 1000);
     $("#train-name").focus();
   
 $("#Submit").on("click", function (event) {
    event.preventDefault();
     console.log("Entered on click function");
    var trainName = $("#train-name").val().trim();
    console.log("Train name is " + trainName);
    var destination = $("#train-destination").val().trim();
    console.log("Train Destination is " + destination);
    var firstTime = $("#train-departure").val().trim();
    console.log("Train first time is " + firstTime);
    var frequency = $("#train-frequency").val().trim();
    console.log("Train frequency is " + frequency); 


  }); 
}); 