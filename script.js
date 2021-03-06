var currentDayEl = $('#currentDay');
var currentTimeEl = moment().format("h:00 a");
var saveBtn = $('.saveBtn');
var timeCol = $('.hour')

// var text rows look into "this" for text area. relationship b/n "this" and save btn


// onClick event listener for the save btn
//when save is clicked, save this specific row 


// display the current day in #currentDay
function displayTime() {
    var rightNow = moment().format("MMM Do YYYY");
    currentDayEl.text(rightNow);
}

// invoke function to display current time
displayTime();

//change color of row based on time 

if ( $("div.8").text() < currentTimeEl) {
    $("#8Row").addClass("past");
} else if ( $("div.8").text() > currentTimeEl) {
    $("#8Row").addClass("future");
} else {
    $("#8Row").addClass("present");
};



console.log("hour: " + $("div.8").text());
console.log("current time: " + currentTimeEl);