
$(document).ready(function () {


    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyA5Lnb_pvGDpWpw1I2Gw_t2sICp7Ywnqsw",
        authDomain: "trainschedule-c6f19.firebaseapp.com",
        databaseURL: "https://trainschedule-c6f19.firebaseio.com",
        projectId: "trainschedule-c6f19",
        storageBucket: "trainschedule-c6f19.appspot.com",
        messagingSenderId: "168248363794"
    };
    firebase.initializeApp(config);


    var database = firebase.database();

    //Function to display the ticking clock based on set interval
    var update = function () {
        $("#currentTime").text(moment().format('hh:mm:ss'));
    }
    setInterval(update, 1000);
    // TimeConvertor();
    $("#train-name").focus();

    //Function called when a new train details are added and Submit is clicked   
    $("#Submit").on("click", function (event) {
        event.preventDefault();
        var trainName = $("#train-name").val().trim();
        var destination = $("#train-destination").val().trim();
        var firstTime = $("#train-departure").val().trim();
        var frequency = $("#train-frequency").val().trim();
        database.ref("TrainData").push(
            {
                trainName: trainName,
                destination: destination,
                frequency: frequency,
                firstTime: firstTime,

            });
        clearForm();

    });
    function clearForm() {
        $("#train-name").val("");
        $("#train-destination").val("");
        $("#train-departure").val("");
        $("#train-frequency").val("");
    }
    database.ref("TrainData").on('child_added', function (snapshot) {
        console.log("Entered child added function");

        var tName = snapshot.val().trainName;
        var dest = snapshot.val().destination;
        var frequency = snapshot.val().frequency;
        var startTime = snapshot.val().firstTime;
        var firstTimeConverted = moment(startTime, "HH:mm").subtract(1, "years");
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        var tRemainder = diffTime % frequency;
        var minutesAway = frequency - tRemainder;
        var arrivalNext = moment().add(minutesAway, "minutes");
        var nextArrival = moment(arrivalNext).format("HH:mm A");

        $("#train-schedule-body").append("<tr><td>" + tName + "</td><td>" + dest + "</td><td>" + frequency + "</td></td><td>" + nextArrival + "</td></td><td>" + minutesAway + "</td></tr>");

    });

    function TimeConvertor() {

        $("#train-schedule-body tr").each(function () {
            var this_row = $(this);
            var frequency = $.trim(this_row.find('td:eq(2)').html());
            var nextArrival = $.trim(this_row.find('td:eq(3)').html());
            var minutesAway = $.trim(this_row.find('td:eq(4)').html());
            var firstTimeConverted = moment(nextArrival, "HH:mm").subtract(1, "years");
            var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
            var tRemainder = diffTime % frequency;
            minutesAway = frequency - tRemainder
            $(this_row.find('td:eq(4)').text(minutesAway));
            var arrivalNext = moment().add(minutesAway, "minutes");
            $(this_row.find('td:eq(3)').text(moment(arrivalNext).format("HH:mm A")));

        });
    }
    setInterval(TimeConvertor, 60000);
}); 