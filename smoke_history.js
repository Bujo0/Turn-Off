

function show_history() {

    var temp_user = JSON.parse(localStorage.current_user)
    var hist = temp_user.smoking_history


    history123.empty().append("<h3>Your Smoking History:</h3>  <ol>"); 


    for(entry in hist){
    	history123.append("<li> On " + Date(hist[entry].date).substring(0, 16) + " you smoked " + hist[entry].count +" cigarettes.</li>");
    }

    history123.append("</ol>"); 

    if(hist.length == 0){
    	 history123.append("<h2>You have no entries!</h2>"); 
    }
}



// enabling adding notes
$(document).ready(function () {
    // get references to variables


    history123 = $("#smokes");

    show_history();
});


		