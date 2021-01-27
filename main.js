var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");
var time = moment();


// variables to store the individual time blocks for reference


// this will go in a function(startDay) because the day changes every 24 hours and I want this to be the first thing called


// function to "start or set planner day"
function startDay (){
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

    $(".time-block").each(function(){
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

startDay()



// event listener that triggers save buttons to save stuff into local storage



// function that tells us what timeblock we are in using color, what timeblocks we have already been in by muting color, and what time blocks we have left by using a different color

function futurePastPresent(){
    
}


