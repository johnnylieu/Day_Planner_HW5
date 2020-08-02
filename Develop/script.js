//variables
var saveBtn = $(".saveBtn");

// function to save to local storage
saveBtn.on("click", function(event) {
    var button = $(this);
    console.log(button); //working

    var btnData = $(this).attr("data-time");
    console.log(btnData); //working, gets time for each save button

    var data = button.siblings(".description").val();
    console.log(data);

    localStorage.setItem(btnData, data);
});

// probably using this to pull from storage
$("#d9").val(localStorage.getItem("9"));
$("#d2").text(localStorage.getItem("d2"));
$("#d3").text(localStorage.getItem("d3"));
$("#d4").text(localStorage.getItem("d4"));
$("#d5").text(localStorage.getItem("d5"));
$("#d6").text(localStorage.getItem("d6"));
$("#d7").text(localStorage.getItem("d7"));
$("#d8").text(localStorage.getItem("d8"));
$("#d9").text(localStorage.getItem("d9"));

// Questions for Bobbi
// how do i align the row (time, textarea, and save button are not horizontally aligned)?
// how do i get my html to show current time with seconds counting down (real time - time lol)?
// should i set the current date and time to a variable then create a function for the variable that will set an attribute for a class in CSS to change the color of text area?
// doesn't refreshing/closing the window clear our local storage data?