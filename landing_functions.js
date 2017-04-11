

$("#guardian_request").click(function(){
        alert("your input is empty")
    });


function update_guardian() {
    g_name = document.getElementById("guardian_name").value;
    g_contact = document.getElementById("guardian_contact").value;


    if((g_name === '') || (g_contact === '')) {
        alert("Please input your guardian name and contact information");
        $.mobile.pageLoadErrorMessage = "";
        window.location.replace("index.html#guardian")
        
    }
    else {
        
        show_guardian(g_name);
        $.mobile.pageLoadErrorMessage = "";
        window.location.replace("index.html#landing")

    }
    
    
}

function show_guardian(name) {
    
    guardian.empty().append("<a href='#guardian' class='ui-btn ui-icon-user ui-btn-icon-left' data-transition='flow'>" +
                    "<h3> Guardian:</h3> <p>" + name + "</p>" );
}

// Due Date:
function show_date(date, days_left) {

    due_date.append("<a href='#due_date' class='ui-btn ui-icon-edit ui-btn-icon-left' data-transition='flow'>Due Date: <p>" + date +"</p> <p>"+days_left+" days </p> </a></li>");            
}

function show_charity(charity_name) {

    charity.append("<a href='#charities' class='ui-btn ui-icon-mail ui-btn-icon-left' data-transition='flow'>Charity:<p>" + charity_name + "</p> </a></li>");            

}



// enabling adding notes
$(document).ready(function () {
    // get references to notes
    money = $("#money");
    target = $("#target");
    due_date = $("#due_date");
    charity = $("#charity");
    guardian = $("#guardian");



    add_guadian = $("#add_guadian");
    name = "None"
    show_guardian(name)

    date = "June 5th"
    days_left = 50
    show_date(date, days_left)

    charity_name = "Red Cross";
    show_charity(charity_name)

});


var users = []

if (localStorage.users) {
    users = JSON.parse(localStorage.users)
} else {
    localStorage.users = JSON.stringify([])
}


function add_user() {	

	if(document.getElementById("username").value == ""){
		alert("Empty Username! Try again!")
		window.location = "index.html#home"
		return;
	}

   if(document.getElementById("password").value == document.getElementById("password2").value){
   	user = {username: document.getElementById("username").value,
   			password: document.getElementById("password").value,
   			smoking_history: [],
   			guardian: "",
   			smoking_target: 0,
   			charity: "",
   			due_date: new Date("2017-05-15")
   			}
   	users.push(user);
   	console.log(user);
   	localStorage.users = JSON.stringify(users)
   }

}

function validate() {
	
	var pas = document.getElementById("login_password").value;
	var username = document.getElementById("login_username").value;

	for (user in users){

		if(users[user].username == username && users[user].password == pas){
			window.location = "index.html#landing"
			return;
		}
	}

	alert("Wrong Username or Password. Try again!");
}