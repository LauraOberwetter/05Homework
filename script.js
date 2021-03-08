var currentDayEl = $('#currentDay');
var currentTimeEl = moment().format("HH:00");
var saveBtn = $('.saveBtn');
var timeCol = $('.hour')


function displayTime() { // display the current day in #currentDay
    var rightNow = moment().format("MMM Do YYYY");
    currentDayEl.text(rightNow);
}
    displayTime(); // invoke function to display current time


for (var i=8; i<17; i++){ //change color of row based on time //get this to work without military time?
    let colorSelector = "#" + i + "Row"
    if ( $("div#" + i).text() < currentTimeEl) {
            $(colorSelector).addClass("past");
        } else if ( $("div#" + i).text() > currentTimeEl) {
            $(colorSelector).addClass("future");
        } else {
            $(colorSelector).addClass("present");
        };
    }


// save to local storage

saveBtn.click(function(){  //event listener --> onClick saveBtn
    let content = $(this).siblings('textarea').val(); // "this" keyword to connect saveBtn to textarea sibling 
    localStorage.setItem("textContent" + $(this).parent().attr('id'), content); // save content to local storage
});

//create loop to retrive content from all rows

function dispText() {   // on load 
    for (var i=8; i<17; i++){
            let storedContent = localStorage.getItem("textContent" + i + "Row"); // get stored contents from all rows
            console.log(storedContent); // get stored contents from all rows
            $("#" + i + "RowText").val(storedContent); // place saved text in same row

        }
};


dispText();

 
    

    
    
    
    
