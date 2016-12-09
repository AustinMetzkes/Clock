var main = function() {

    

    window.alert("hello, it works!");

    console.log("test message");

    

    // when button is clicked...

    $("#addCommentButton").click( function(event) { 

        addComment();
       

    });

    

    $("#newCommentBox").on("keypress", function(event) {

        

        if(event.keyCode == 13) {

            addComment();
            

        }

    });
    


    
    function addComment() {

        // get new comment text from input box

        var commentText = $("#newCommentBox").val();

    

        // add new comment to the comments div

        var newComment = $("<p>");

        newComment.text(commentText);

        newComment.hide();

        $("#comments").append( newComment );

        newComment.slideDown();

        

        $("#newCommentBox").val("");  

    }
    
    
$(document).ready(main);
    
    
    