function show_money(frozen, daily) {

    money.append("<a href='#add_money' class='ui-btn ui-icon-lock ui-btn-icon-left' data-transition='flow'>" +
                    "<h3> Amount Frozen:</h3> <p>$" + frozen + " </p>" +
                    "<h3> Daily Refund: </h3> <p>$" + daily + " </p>");
        
}

function show_target(target_cigs, avg_smoked) {
    target.append("<a href= '#target' class='ui-btn ui-icon-lock ui-btn-icon-left' data-transition='flow'>"+
                        "<h3> Target cigarettes:</h3> <p>"+ target_cigs + " cigarettes</p>"+
                        "<h3> Average smoked per day: </h3> <p>" + avg_smoked + " cigarettes</p>");
}

function show_guardian(name) {

    guardian.append("<a href='#guardian' class='ui-btn ui-icon-user ui-btn-icon-left' data-transition='flow'>" +
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

    frozen = 1000;
    daily = 100;
    show_money(frozen, daily);

    target_cigs = 0;
    avg_smoked = 6.4;
    show_target(target_cigs, avg_smoked);



    name = "Kally Wu"
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

   if(document.getElementById("password").value == document.getElementById("password2").value){
   	user = {username: document.getElementById("username").value, password: document.getElementById("password").value}
   	users.push(user);
   	localStorage.users = JSON.stringify(users)
   }

}