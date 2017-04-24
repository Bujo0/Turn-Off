$('head').append('<link rel="stylesheet" type="text/css" href="style.css">');

function extend_due_date() {

  var temp_user = JSON.parse(localStorage.current_user);
  temp_user.due_date = Date.parse(document.getElementById('extended_date').value);
  
  if( !(isNaN(temp_user.due_date))) {
  	localStorage.current_user = JSON.stringify(temp_user)
  	show_date()
  	// $.mobile.pageLoadErrorMessage = "";
    window.location.replace("index.html#landing")
  }
  else {
  	alert("You must input a date")
  	// $.mobile.pageLoadErrorMessage = "";
    window.location.replace("index.html#due_date")
  }

}
