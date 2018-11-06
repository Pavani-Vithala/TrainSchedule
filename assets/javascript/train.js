
$(document).ready(function () {
    var update = function() {
     $("#currentTime").text(moment().format('hh:mm:ss'));
    }
     setInterval(update, 1000);
     $("#train-name").focus();
   
 $("#Submit").on("click", function (event) {
    event.preventDefault();
    var trainName = $("#train-name").val().trim();
    var destination = $("#train-destination").val().trim();
    var firstTime = $("#train-departure").val().trim();
    var frequency = $("#train-frequency").val().trim();
    populateTable(trainName,destination,firstTime,frequency);


  }); 
function populateTable(trainName,destination,firstTime,frequency)
{
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
    $("#trainTable").append("<tr><td>"+tName+"</td><td>"+Dest+"</td><td>"+frequency+"</td></td><td>"+nextArrival+"</td></td><td>"+minutesAway+"</td></tr>");

}

}); 