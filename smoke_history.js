

function show_history() {

    var temp_user = JSON.parse(localStorage.current_user)
    var hist = temp_user.smoking_history


    history123.empty().append("<h3>Your Smoking History:</h3>  <table class='fixed'"); 

    history123.empty().append("<tr> <th> <h3> Date </h3> </th> <th> <h3> Cigarettes </h3> </th> <th> <h3> Target </h3> </th> <th> <h3> Won (Lost) </h3> </th> </tr>"); 

    for(entry in hist){
        var app = "";

        app+=("<tr> <th> <h3>" + Date(hist[entry].date).substring(0, 16) +"</h3> </th> <th> <h3>" + hist[entry].count +" </h3> </th> <th> <h3>" + hist[entry].target + "</h3> </th>");

        if(hist[entry].target >= hist[entry].count){
            app+=("<th> <h3>" + (Math.round(hist[entry].money)*100)/100 + "</h3> </th> </tr>");
        }
        else {
            app+=(" <th> <h3> (" + (Math.round(hist[entry].money)*100)/100 + ") </h3> </th> </tr>");
        }
        history123.append(app);
    }

    history123.append("</table>")

     if(hist.length == 0){
         history123.append("<h3>You have no entries!</h3>"); 
    }
}



// enabling adding notes
$(document).ready(function () {
    // get references to variables


    history123 = $("#smokes");

    show_history();
});


		