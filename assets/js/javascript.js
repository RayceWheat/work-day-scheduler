// selecting the current day area in the html
var currentDay = document.querySelector("#currentDay");

// displaying the current day 
currentDay.textContent = moment().format('dddd,  MMMM Do');

// selecting the hour blocks 
var nineAm = document.querySelector("#nine");
var tenAM = document.querySelector("#ten");
var elevenAM = document.querySelector("#eleven");
var twelevePM = document.querySelector("#tweleve");
var onePM = document.querySelector("#one");
var twoPM = document.querySelector("#two");
var threePM = document.querySelector("#three");
var fourPM = document.querySelector("#four");
var fivePM = document.querySelector("#five");

console.log(moment().format("h"));

var saveButtonEl = document.querySelectorAll(".save-btn");

//console.log(saveButtonEl);
// set an interval of 30 minutes
// check time
// update class based on time 

// add a counter to know which element is clicked
var hourCounter = 0;
// add listener to every element which updates the counter in order to be able to know which hour was clicked

console.log(hourCounter);

$("#nine").on("click", "p", function(){
    hourCounter = 9;
}) 

$("#ten").on("click", "p", function(){
    hourCounter = 10;
}) 

$("#eleven").on("click", "p", function(){
    hourCounter = 11;
}) 

$("#tweleve").on("click", "p", function(){
    hourCounter = 12;
}) 

$("#one").on("click", "p", function(){
    hourCounter = 1;
}) 

$("#two").on("click", "p", function(){
    hourCounter = 2;
}) 

$("#three").on("click", "p", function(){
    hourCounter = 3;
}) 

$("#four").on("click", "p", function(){
    hourCounter = 4;
}) 

$("#five").on("click", "p", function(){
    hourCounter = 5;
}) 

// updating the hour blocks every 30 minutes
setInterval(function() {
    checktime();
;},

1800000);

// function to allow user to edit text 
$(".col-10").on("click", "p", function(){
        var text = $(this)
        .text()
        .trim();

        var textInput = $("<textarea>")
          .addClass("form-control")
          .val(text);
      
        $(this).replaceWith(textInput);
      
        textInput.trigger("focus");

    $(".time-block").on("click", ".save-btn", function() {
        var test = $(textInput)
        .val()
        .trim();

        var taskP = $("<p>")
        .text(test);
        
        localStorage.setItem(String(hourCounter), JSON.stringify(test));

        $(textInput).replaceWith(taskP);
    })

});

nineAm.innerHTML += "<p>" + (localStorage.getItem('nineAmText')) + "<p>";

// function which assings each hour block to, past, prestent, future
var checktime = function() {

    if (Number(moment().format("H")) === 9) {
  
        nineAm.className = "col-10 present";
    
    } else if (Number(moment().format("H")) < 9) {
       
        nineAm.className = "col-10 future";
    
    } else if (Number(moment().format("H")) > 9) {
    
        nineAm.className = "col-10 past"
    
    }

    if (Number(moment().format("H")) === 10) {
  
        tenAM.className = "col-10 present";
    
    } else if (Number(moment().format("H")) < 10) {
       
        tenAM.className = "col-10 future";
    
    } else if (Number(moment().format("H")) > 10) {
    
        tenAM.className = "col-10 past"
    
    };

    if (Number(moment().format("H")) === 11) {
  
        elevenAM.className = "col-10 present";
    
    } else if (Number(moment().format("H")) < 11) {
       
        elevenAM.className = "col-10 future";
    
    } else if (Number(moment().format("H")) > 11) {
    
        elevenAM.className = "col-10 past"
    
    };

    if (Number(moment().format("H")) === 12) {
  
        twelevePM.className = "col-10 present";
    
    } else if (Number(moment().format("H")) < 12) {
       
        twelevePM.className = "col-10 future";
    
    } else if (Number(moment().format("H")) > 12) {
    
       twelevePM.className = "col-10 past"
    
    };

    if (Number(moment().format("H")) === 1) {
  
        onePM.className = "col-10 present";
    
    } else if (Number(moment().format("H")) < 1) {
       
        onePM.className = "col-10 future";
    
    } else if (Number(moment().format("H")) > 1) {
    
       onePM.className = "col-10 past"
    
    };

    if (Number(moment().format("H")) === 2) {
  
        twoPM.className = "col-10 present";
    
    } else if (Number(moment().format("H")) < 2) {
       
        twoPM.className = "col-10 future";
    
    } else if (Number(moment().format("H")) > 2) {
    
       twoPM.className = "col-10 past"
    
    };

    if (Number(moment().format("H")) === 3) {
  
        threePM.className = "col-10 present";
    
    } else if (Number(moment().format("H")) < 3) {
       
        threePM.className = "col-10 future";
    
    } else if (Number(moment().format("H")) > 3) {
    
       threePM.className = "col-10 past"
    
    };

    if (Number(moment().format("H")) === 4) {
  
        fourPM.className = "col-10 present";
    
    } else if (Number(moment().format("H")) < 4) {
       
        fourPM.className = "col-10 future";
    
    } else if (Number(moment().format("H")) > 4) {
    
       fourPM.className = "col-10 past"
    
    };

    if (Number(moment().format("H")) === 5) {
  
        fivePM.className = "col-10 present";
    
    } else if (Number(moment().format("H")) < 5) {
       
        fivePM.className = "col-10 future";
    
    } else if (Number(moment().format("H")) > 5) {
    
       fivePM.className = "col-10 past"
    
    };

}

// assinging the hour blocks on page load
checktime();

// pulling stuff from localstorage to set on the page 

if (!localStorage.getItem('9')) {

    nineAm.innerHTML = "<p>Awaiting a task</p>";

} else {

    nineAm.innerHTML = "<p>" + localStorage.getItem('9') + "</p>";

};

if (!localStorage.getItem('10')) {

    tenAM.innerHTML = "<p>Awaiting a task</p>";

} else {

    tenAM.innerHTML = "<p>" + localStorage.getItem('10') + "</p>";

};

if (!localStorage.getItem('11')) {

    elevenAM.innerHTML = "<p>Awaiting a task</p>";

} else {

    elevenAM.innerHTML = "<p>" + localStorage.getItem('11') + "</p>";

};

if (!localStorage.getItem('12')) {

    twelevePM.innerHTML = "<p>Awaiting a task</p>";

} else {

    twelevePM.innerHTML = "<p>" + localStorage.getItem('12') + "</p>";

};

if (!localStorage.getItem('1')) {

    onePM.innerHTML = "<p>Awaiting a task</p>";

} else {

    onePM.innerHTML = "<p>" + localStorage.getItem('1') + "</p>";

};

if (!localStorage.getItem('2')) {

    twoPM.innerHTML = "<p>Awaiting a task</p>";

} else {

    twoPM.innerHTML = "<p>" + localStorage.getItem('2') + "</p>";

};

if (!localStorage.getItem('3')) {

    threePM.innerHTML = "<p>Awaiting a task</p>";

} else {

    threePM.innerHTML = "<p>" + localStorage.getItem('3') + "</p>";

};

if (!localStorage.getItem('4')) {

    fourPM.innerHTML = "<p>Awaiting a task</p>";

} else {

    fourPM.innerHTML = "<p>" + localStorage.getItem('4') + "</p>";

};

if (!localStorage.getItem('5')) {

    fivePM.innerHTML = "<p>Awaiting a task</p>";

} else {

    fivePM.innerHTML = "<p>" + localStorage.getItem('5') + "</p>";

};