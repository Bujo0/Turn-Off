var user_smoking_target = 50;
var smoking_history = [0,0,0,1,2,3,4,1,5,6,1,0,5,1,5,6,8]

function isInteger(n) {
    return n === +n && n === (n|0);
}

//got inspiration from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
function list_average (history) {
	//read example here: http://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
	function add (x,y) {
		return x + y;
	}


	return(Math.round((history.reduce(add, 0)/history.length)*10)/10);

}

function show_target() {

	var avg_smoked = list_average(JSON.parse(localStorage.current_user).smoking_history); 

    target.empty().append("<a href= '#new_target' onclick='show_change_target_form()' class='ui-btn ui-icon-lock ui-btn-icon-left' data-transition='flow'>"+
                        "<h3> Target cigarettes:</h3> <p>"+ JSON.parse(localStorage.current_user).smoking_target + " cigarettes</p>"+
                        "<h3> Average smoked per day: </h3> <p>" + avg_smoked + " cigarettes</p>");

    console.log('station 2')
}




function show_change_target_form() {


	change_target_form.empty().append("<label for='fname'>Current target:</label>" + 
                "<h3>" + JSON.parse(localStorage.current_user).smoking_target + "</h3>"  + 
                "<label for='fname'>change the target to:</label>" + 
                "<input type='text' name='fname' id='updated_target'>" + 
                '<a href="#team" data-rel="back" data-icon="ui-btn-icon-left ui-icon-back" class="ui-btn" id="change_target_button" onclick="change_target();">Change Target</a> '
                    );

}

function change_target() {

	console.log('station1');

	var new_target = document.getElementById("updated_target").value;
	if( !(isNaN(parseFloat(new_target)))) {
		if ((isInteger(parseFloat(new_target)))) {

			temp_user = JSON.parse(localStorage.current_user);
			temp_user.smoking_target = new_target;
			localStorage.current_user = JSON.stringify(temp_user);
			// alert(frozen);
			show_target(JSON.parse(localStorage.current_user).smoking_target,JSON.parse(localStorage.current_user).smoking_history);



		}
		else {
			alert("sorry but your input must be a number ")
		}	
	}
	else {
		alert("your input is empty")
	}
	
	
}


// enabling adding notes
$(document).ready(function () {
    // get references to variables


    target = $("#target");

    change_target_form = $("#change_target_form");


    show_target();

    // show_change_target_form();

    //change_target();




    

});