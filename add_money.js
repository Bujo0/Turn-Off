function isFloat(n) {
    return n === +n && n !== (n|0);
}
function isInteger(n) {
    return n === +n && n === (n|0);
}


// ? TODO: make sure the input is not empty and must be aan integer
function show_money() {

    var timeDiff = Math.abs(JSON.parse(localStorage.current_user).due_date - Date.now())
    var days_left = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    daily = Math.round(JSON.parse(localStorage.current_user).amount_frozen / days_left);
    frozen = JSON.parse(localStorage.current_user).amount_frozen
    money.empty().append("<a href='#add_money' class='ui-btn ui-icon-lock ui-btn-icon-left' data-transition='flow'>" +
                    "<h3> Amount Frozen:</h3> <p>$" + frozen + " </p>" +
                    "<h3> Daily Refund: </h3> <p>$" + daily + " </p>"  
                    );
            
}

function show_update_guardian() {

    update_guardian_form.empty().append('<form action="/action_page.php">' +
          'Goal: ' + JSON.parse(localStorage.current_user).smoking_target + ' cigeratte(s)<br>' + 
          'Cigarette Count Today:<br>' +
          '<input type="text" id="today_count"><br><br>' +
        '<fieldset data-role="controlgroup">' + 
            '<legend>Select Guardian to Notify</legend>' +
              '<label for="jason">Jason</label>' + 
              '<input type="checkbox"  id="jason" value="Jason">' + 
              '<label for="yoav">Yoav</label>' + 
              '<input type="checkbox"  id="yoav" value="Yoav">' + 
        '</fieldset>' + 
        '<a href="#landing" data-rel="back" data-icon="ui-btn-icon-left ui-icon-back" class="ui-btn" onclick="daily_check_in();">Check In</a>' + 
        '</form>');
            
}



function add_money_to_frozen(frozen) {

    // somehow frozen is not updated in this page

    add_money_form.empty().append("<label for='fname'>Current Frozen Balance</label>" + 
                "<label for='fname'>" + '$ ' + JSON.parse(localStorage.current_user).amount_frozen + "</label>"  + 
                "<label for='fname'>Add to Frozen Amount</label>" + 
                "<input type='text' name='fname' id='added_amount'>" + 
                "<label for='fname'>Credit Card Number</label>" + 
                "<input type='text' name='fname' id='credit_card_number'>" + 
                '<label for="date">Expiration Date</label>' + 
                '<input type="date" name="date" id="date" value=""/> ' +
                '<label for="fname">CSV</label>' + 
                '<input type="text" name="fname" id="fname"> ' +
                '<button class="ui-btn" onclick="update_frozen()">Add Money</button>'
                    );

}

function update_frozen() {
    var added_f = document.getElementById("added_amount").value;


    frozen = JSON.parse(localStorage.current_user).amount_frozen

    if( !(isNaN(parseFloat(added_f)))) {
        if ((isFloat(parseFloat(added_f))) | (isInteger(parseFloat(added_f)))) {
            frozen = parseFloat(frozen) + parseFloat(added_f);

            var temp_user = JSON.parse(localStorage.current_user);
            temp_user.amount_frozen = frozen;
            localStorage.current_user = JSON.stringify(temp_user)
            // alert(frozen);
            show_money(frozen,daily);
            add_money_to_frozen(frozen);
            $.mobile.pageLoadErrorMessage = "";
            window.location.replace("index.html#landing")

        }
        else {
            alert("sorry but your input must be a number ");
            $.mobile.pageLoadErrorMessage = "";
            window.location.replace("index.html#add_money")
        }   
    }
    else {
        alert("your input is empty");
        $.mobile.pageLoadErrorMessage = "";
        window.location.replace("index.html#add_money")

    }
    
    
}

function daily_check_in() {
    var today_count = document.getElementById("today_count").value;

    // I shall probably make guardian names into variables
    var guardian_name = ""

    smoking_history = JSON.parse(localStorage.current_user).smoking_history;
    if ((document.getElementById("jason").checked) || (document.getElementById("yoav").checked)) {
        if ((document.getElementById("jason").checked) && (document.getElementById("yoav").checked)) {
            alert("you can only select 1 guardian")
        }
        else {
            if (document.getElementById("jason").checked) {
                guardian_name = document.getElementById("jason").value
            }
            if (document.getElementById("yoav").checked) {
                guardian_name = document.getElementById("yoav").value
            }
            if( !(isNaN(parseFloat(today_count)))) {
                if ((isFloat(parseFloat(today_count))) || (isInteger(parseFloat(today_count)))) {
                    var timeDiff = Math.abs(JSON.parse(localStorage.current_user).due_date - Date.now())
                    var days_left = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

                    daily = JSON.parse(localStorage.current_user).amount_frozen / days_left;

                    var entry = {count: parseFloat(today_count), date: Date(Date.now())}
                    smoking_history.push(entry)
                    var temp_user = JSON.parse(localStorage.current_user)
                    temp_user.smoking_history = smoking_history
                    if(temp_user.smoking_target < today_count){
                        temp_user.amount_frozen -= daily
                    }
                    localStorage.current_user = JSON.stringify(temp_user)
                    show_target()

                    alert_text = "You smoked " + today_count + " cigeratte(s) today. " + "A message of confirmation has been sent to " + guardian_name+ "."
                    alert(alert_text)

                }
                else {
                    alert("sorry but your input must be a number ")
                }   
            }
            else {
                alert("your input is empty")
            }

        }


        


    }
    else {
         alert("You need to select a guardian")

    }


    

}


// enabling adding notes
$(document).ready(function () {
    // get references to variables


    money = $("#money");

    add_money_form = $("#add_money_form");

    update_guardian_form = $("#update_guardian_form");

    show_money();

    add_money_to_frozen(frozen);

    show_update_guardian();



    

});