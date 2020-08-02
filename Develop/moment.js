$(document).ready(function() {
    $("#currentDay").text(moment().format('ddd MMM Do, YYYY, h:mm:ss a'));
});

var currentTime = $("#currentDay");
var nine = $("#9");
var ten = $("#description10");
var eleven = $("#description11");
var twelve = $("#description12");
var one = $("#description13");
var two = $("#description14");
var three = $("#description15");
var four = $("#description16");
var five = $("#description17");

function hourUpdate() {
    var currentHour = moment().hour(); // updates hour every 1.5 secs
    console.log(currentHour);

    $(".time-block").each(function (){
        var hourId = parseInt($(this).attr("id"));
        console.log(hourId); // google this part and on top

        if (hourId < currentHour) {
            $(this).attr("class", "past"); // set attribute to past
        };

        if (hourId > currentHour) {
            $(this).attr("class", "future");
        };

        if (hourId === currentHour) {
            $(this).attr("class", "present");
        }
    });
    
}

var interval = setInterval(hourUpdate, 1500); // every 1.5 seconds