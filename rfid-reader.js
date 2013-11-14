document.forms['foo'].elements['usb-input'].focus();

$(function() { //shorthand document.ready function
    $('#foo').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting
        var data = $("#foo :input").serializeArray();
        console.log(data); //use the console for debugging, F12 in Chrome, not alerts
    });
});