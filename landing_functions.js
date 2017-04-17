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

        var temp_user = JSON.parse(localStorage.current_user);
        temp_user.guardian = g_name;
        temp_user.guardian_lst.push(g_name)
        localStorage.current_user = JSON.stringify(temp_user)
        
        show_guardian();
        $.mobile.pageLoadErrorMessage = "";
        window.location.replace("index.html#landing")

    }
}

function show_guardian() {
  console.log(JSON.parse(localStorage.current_user));
    
    guardian.empty().append("<a href='#guardian' class='ui-btn ui-icon-user ui-btn-icon-left' data-transition='flow'>" +
                    "<h3> Guardian:</h3> <p>" + JSON.parse(localStorage.current_user).guardian + "</p>" );
}

// Due Date:
function show_date() {

    due_date.empty().append("<a href='#due_date' class='ui-btn ui-icon-edit ui-btn-icon-left' data-transition='flow'>Due Date: <p>" + (new Date(JSON.parse(localStorage.current_user).due_date)).toString().substring(0,16) +"</p> <p>"+Math.ceil(Math.abs(JSON.parse(localStorage.current_user).due_date - Date.now()) / (1000 * 3600 * 24))+" days </p> <p id="+ "progressbar"+ "></p></a></li>");            
}

function show_charity() {

    charity.empty().append("<a href='#charities' class='ui-btn ui-icon-mail ui-btn-icon-left' data-transition='flow'>Charity:<p>" + JSON.parse(localStorage.current_user).charity + "</p> </a></li>");     

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

    show_date()


    show_charity()

    update_charity_form = $("#update_charity_form");

    show_update_charity()

});





// users logic
var users = []

if (localStorage.users) {
    users = JSON.parse(localStorage.users)
} else {
    localStorage.users = JSON.stringify([])
}


if (!localStorage.current_user) {
    localStorage.current_user = JSON.stringify("")
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
        guardian_lst: [],
        smoking_target: 0,
        charity: "",
        due_date: Date.parse('May 15, 2017'), 
        amount_frozen: 0,
        amount_lost: 0,
        amount_won: 0
        }
    users.push(user);
    console.log(user);
    localStorage.users = JSON.stringify(users)
   }

}



function validate() {
  
  var pas = document.getElementById("login_password").value;
  var username = document.getElementById("login_username").value;

  if(username == ""){
  		alert("You must provide your username! Try again.")
  		window.location = "index.html#home"
  		return;
  }

  for (user in users){

    if(users[user].username == username && users[user].password == pas){
      localStorage.current_user = JSON.stringify(users[user]);
      window.location = "index.html#landing"
      window.location.reload()
      return;
    }
  }

  alert("Wrong Username or Password. Try again!");
}