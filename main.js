$(document).ready(function (){

    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    function pleaseWork() {
        // **Get current number of hours from Moment and set it to a variable currentHour: 
        var currentHour = moment().hours();
        //**Loop through all of the buttons
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id"));

            if (currentHour === blockHour) {
                // $(this).removeClass("future");
                // $(this).removeClass("past");
                $(this).addClass("present");
            }
            else if (currentHour > blockHour) {
                // $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
pleaseWork();
   


    var saveBtn = $(".saveBtn");
    saveBtn.on("click", function () {
        //**Declare a Time variable and store time block (button element id--set by hours of the calendar):
        var time = $(this).parent().attr("id");
        //**Declare a Value variable
        var value = $(this).siblings(".schedule").val()
        localStorage.setItem(time, value)
    })




    // WHEN I refresh the page
    // THEN the saved events persist
    // -----------------------------------------------------------------------------------------------//
    //**For each text-area class, get data from local storage and populate as text string */
    $("#9 .schedule").val(localStorage.getItem("9"))
    $("#10 .schedule").val(localStorage.getItem("10"))
    $("#11 .schedule").val(localStorage.getItem("11"))
    $("#12 .schedule").val(localStorage.getItem("12"))
    $("#13 .schedule").val(localStorage.getItem("13"))
    $("#14 .schedule").val(localStorage.getItem("14"))
    $("#15 .schedule").val(localStorage.getItem("15"))
    $("#16 .schedule").val(localStorage.getItem("16"))
    $("#17 .schedule").val(localStorage.getItem("17"))

});