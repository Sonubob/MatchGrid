// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var prevText = 0;
var prevId = "";
$resetValues = function () {
    prevText = 0;
    prevId = "";
}

$changeToRedCover = function ( id ) {
    if (($('#' + id).hasClass('white-cover')) && !($('#' + id).hasClass('disable-click'))) {
        $('#' + id).delay(1000).toggleClass('white-cover').delay(1000).toggleClass('red-cover');
    }
}
function Timer() {
    var counter = 120;
    var myTimer = setInterval(function () {
        document.getElementById("testTimer").innerHTML = counter;
        counter--;
        if (counter < 0) {
            clearInterval(myTimer);
            document.getElementById("testTimer").style.color = "red";
           
        }
    }, 1000);
}
Timer();

$("#match-grid td").click(function () {

    var id = $(this).attr('id');
    if (!($('#' + id).hasClass('disable-click'))) {
        $('#' + id).toggleClass('white-cover').toggleClass('red-cover');
    }
    
    var value = $('#' + id + ' p').text().trim();
    if (prevText == value && prevId != id) {
        $('#' + id).addClass('disable-click');
        $('#' + prevId).addClass('disable-click');
        $resetValues();
    } else {
        if (prevId != "") {
            $changeToRedCover(prevId);
            $changeToRedCover(id);
            $resetValues();
        } else {
             prevText = value.trim();
             prevId = id;
        }
    }
  

   
   
});