var currentDayEl = $('#currentDay');
var currentTimeEl = moment().format("HH:00 a");
var saveBtn = $('.saveBtn');
var timeCol = $('.hour')


function displayTime() { // display the current day in #currentDay
    var rightNow = moment().format("MMM Do YYYY");
    currentDayEl.text(rightNow);
}
    displayTime(); // invoke function to display current time


for (var i=8; i<17; i++){ //change color of row based on time //get this to work without military time?
    let selector = "#" + i + "Row"
    if ( $("div#" + i).text() < currentTimeEl) {
        console.log(i);
            $(selector).addClass("past");
        } else if ( $("div#" + i).text() > currentTimeEl) {
            $(selector).addClass("future");
        } else {
            $(selector).addClass("present");
        };
    }

/* console.log("hour: " + $("div#8").text());
console.log("current time: " + currentTimeEl); */


// save to local storage

saveBtn.click(function(){  //event listener --> onClick saveBtn
    // "this" keyword to connect saveBtn to textarea sibling 
    // save content to local storage
});


$(window).load(function() {   // on load 
    // retrieve content from local 
    // storage and place in same row
});
    
    
    
    
