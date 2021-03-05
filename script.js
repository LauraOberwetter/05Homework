var currentDayEl = $('#currentDay');


// display the current day in #currentDay
function displayTime() {
    var rightNow = moment().format("MMM Do YY");
    currentDayEl.text(rightNow);
}