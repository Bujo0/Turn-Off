

function show_history() {

    var temp_user = JSON.parse(localStorage.current_user)
    var hist = temp_user.smoking_history


    history123.empty().append("<h3>Your Smoking History:</h3>  <table class='fixed'"); 

    history123.empty().append("<tr> <th> Date </th> <th> Cigarettes </th> <th> Target</th> <th> Won (Lost) </th> </tr>"); 

    for(entry in hist){
        var app = "";

        app+=("<tr> <th>" + Date(hist[entry].date).substring(0, 16) +"</th> <th>" + hist[entry].count +" </th> <th>" + hist[entry].target + "</th>");

        if(hist[entry].target >= hist[entry].count){
            app+=("<th>" + (Math.round(hist[entry].money)*100)/100 + "</th> </tr>");
        }
        else {
            app+=(" <th> (" + (Math.round(hist[entry].money)*100)/100 + ") </th> </tr>");
        }
        history123.append(app);
    }

    history123.append("</table>")

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


		