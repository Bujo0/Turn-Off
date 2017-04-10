function show_money(frozen, daily) {

    money.append("<a href='#add_money' class='ui-btn ui-icon-lock ui-btn-icon-left' data-transition='flow'>" +
                    "<h3> Amount Frozen:</h3> <p>$" + frozen + " </p>" +
                    "<h3> Daily Refund: </h3> <p>$" + daily + " </p>");

            
}

// enabling adding notes
$(document).ready(function () {
    // get references to notes
    money = $("#money");

    frozen = 10
    daily = 100

    show_money(frozen, daily)

});