// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// -----------------------------------------------------------------------------------------------//
//**Display current day on page from Moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do"));



// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// -----------------------------------------------------------------------------------------------//
//**HTML with standard time blocks==attach an id”9"*/



// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// -----------------------------------------------------------------------------------------------//
// **Get current number of hours from Moment and set it to a variable currentHour: 
var currentHour = moment().hours();
//**Loop through all of the buttons
for (i=0; i <saveBtn; i ++){
//**Declare a variable blockHour and set it to the value of each button id using: parseInt($(this).attr(“id”))
var blockHour = parseInt($(this).attr("id"))
if (currentHour == blockHour){
    $(this).addClass("present");
} 
else if (currentHour < blockHour){
    $(this).addClass("past");
}
else {
    $(this).addClass("future");
}
//**Using if statements, compare currentHour to blockHOur and tag classes “past, presnt, or future” on each button using $(this).addClass(“present”); $(this).removeClass(“past”); $(this).removeClass(“future”) depending on whether currentHour is equal to, greater than, or less than each blockHour
}

// WHEN I click into a time block
// THEN I can enter an event
// -----------------------------------------------------------------------------------------------//
//HTML


// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// -----------------------------------------------------------------------------------------------/
//**Make an event listener for a button click, and when clicked save key: value to local storage */
//  localStorage.setItem(time, value);
var saveBtn=$(".saveBtn");
saveBtn.on("click", function(){
    //**Declare a Time variable and store time block (button element id--set by hours of the calendar):
    var time = $(this).parent().attr("id");
    //**Declare a Value variable
    var value = $(this).siblings(".description").val()
    localStorage.setItem(time,value)
})




// WHEN I refresh the page
// THEN the saved events persist
// -----------------------------------------------------------------------------------------------//
//**For each text-area class, get data from local storage and populate as text string */
 $("#9 .description").val(localStorage.getItem("9"))
 $("#10 .description").val(localStorage.getItem("10"))
 $("#11 .description").val(localStorage.getItem("11"))
 $("#12 .description").val(localStorage.getItem("12"))
 $("#13 .description").val(localStorage.getItem("1"))
 $("#14 .description").val(localStorage.getItem("2"))
 $("#15 .description").val(localStorage.getItem("3"))
 $("#16 .description").val(localStorage.getItem("4"))
 $("#17 .description").val(localStorage.getItem("5"))