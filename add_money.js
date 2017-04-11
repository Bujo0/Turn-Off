 var frozen = 5000;
 var daily = 10;



function isFloat(n) {
    return n === +n && n !== (n|0);
}
function isInteger(n) {
    return n === +n && n === (n|0);
}


// ? TODO: make sure the input is not empty and must be aan integer
function show_money(frozen, daily) {

    money.empty().append("<a href='#add_money' class='ui-btn ui-icon-lock ui-btn-icon-left' data-transition='flow'>" +
                    "<h3> Amount Frozen:</h3> <p>$" + frozen + " </p>" +
                    "<h3> Daily Refund: </h3> <p>$" + daily + " </p>"  
                    );
            
}


function add_money_to_frozen(frozen) {

	// somehow frozen is not updated in this page

	add_money_form.empty().append("<label for='fname'>Current Frozen Balance</label>" + 
                "<label for='fname'>" + '$ ' + frozen + "</label>"  + 
                "<label for='fname'>Add to Frozen Amount</label>" + 
                "<input type='text' name='fname' id='added_amount'>" + 
                "<label for='fname'>Credit Card Number</label>" + 
                "<input type='text' name='fname' id='credit_card_number'>" + 
                '<label for="date">Expiration Date</label>' + 
                '<input type="date" name="date" id="date" value=""/> ' +
                '<label for="fname">CSV</label>' + 
                '<input type="text" name="fname" id="fname"> ' +
                '<a href="#team" data-rel="back" data-icon="ui-btn-icon-left ui-icon-back" class="ui-btn" id="add_money_button" onclick="update_frozen();">Add Money</a> '
                    );

}

function update_frozen() {
	var added_f = document.getElementById("added_amount").value;

	if( !(isNaN(parseFloat(added_f)))) {
		if ((isFloat(parseFloat(added_f))) | (isInteger(parseFloat(added_f)))) {
			frozen = parseFloat(frozen) + parseFloat(added_f);
			// alert(frozen);
			show_money(frozen,daily);

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


    money = $("#money");

    add_money_form = $("#add_money_form");

    show_money(frozen, daily)

    add_money_to_frozen(frozen)



    

});


			