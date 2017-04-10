function show_money(frozen, daily) {

    money.append("<a href='#add_money' class='ui-btn ui-icon-lock ui-btn-icon-left' data-transition='flow'>" +
                    "<h3> Amount Frozen:</h3> <p>$" + frozen + " </p>" +
                    "<h3> Daily Refund: </h3> <p>$" + daily + " </p>");
}

// Due Date:
function change_date(date, days_left) {

    due_date.append("<a href='#due_date' class='ui-btn ui-icon-edit ui-btn-icon-left' data-transition='flow'>Due Date: <p>" + date +"</p> <p>"+days_left+" days </p> </a></li>");            
}


// enabling adding notes
$(document).ready(function () {
    // get references to notes
    money = $("#money");
    due_date = $("#due_date");

    frozen = 10
    daily = 100


    show_money(frozen, daily)

    date = "June 5th"
    days_left = 50
    change_date(date, days_left)

});
