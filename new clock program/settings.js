var main = function() {


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

        var commentText = $("#sizing-addon1").vasizing-addon1l();

    

        // add new comment to the comments div

        var newComment = $("<p>");

        newComment.text(commentText);

        newComment.hide();

        $("#comments").append( newComment );

        newComment.slideDown();

        

        $("#newCommentBox").val("");  

    }
    
    
$(document).ready(main);
    
    
    