$(document).ready(function(){
    $( "#contact-form" ).submit(function( event ) {
        event.preventDefault();
        // Capturing data introduced by user
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var contactNumber = $("#contactNumber").val();
        var emailAddress = $("#emailAddress").val();
        var message = $("#message").val();
        document.location.href = '/'
    });
})