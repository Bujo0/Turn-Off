function show_money(frozen, daily) {

    money.append("<a href='#add_money' class='ui-btn ui-icon-lock ui-btn-icon-left' data-transition='flow'>" +
                    "<h3> Amount Frozen:</h3> <p>$" + frozen + " </p>" +
                    "<h3> Daily Refund: </h3> <p>$" + daily + " </p>");
        
}


function show_guardian(name) {

    guardian.append("<a href='#guardian' class='ui-btn ui-icon-user ui-btn-icon-left' data-transition='flow'>" +
    	            "<h3> Guardian:</h3> <p>$" + name + "</p>" );
        
}


// enabling adding notes
$(document).ready(function () {
    // get references to notes
    money = $("#money");

    frozen = 1000
    daily = 100

    show_money(frozen, daily)

    guardian = $("#guardian");
    name = "Kally Wu"
    show_guardian(name)

});