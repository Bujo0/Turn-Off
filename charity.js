$('head').append('<link rel="stylesheet" type="text/css" href="style.css">');
var charity_chosen = "";

function update_charity() {

	var charity_lst = document.getElementsByName('charity');
  var checked = false;
	for(var i = 0; i < charity_lst.length; i++){
	    if(charity_lst[i].checked){
          temp_user = JSON.parse(localStorage.current_user);
          temp_user.charity = charity_lst[i].value;
	        localStorage.current_user = JSON.stringify(temp_user);
	        show_update_charity();
	        show_charity();
          checked = true;
	    }

	}
  if (checked == false){
        alert("Please input a new target");
        $.mobile.pageLoadErrorMessage = "";
        window.location.replace("index.html#charities")
  }

  else{
    window.location.replace("index.html#landing")
  }

}

function show_update_charity() {

    update_charity_form.empty().append('<form action="/action_page.php">' +
    	'<h3>Charities:</h3>' +
        '<fieldset data-role="controlgroup">' +
            '<legend>Select a Charity</legend>' +
              '<label for="RedCross">Red Cross</label>' + 
              '<input type="radio"  id="RedCross" value="Red Cross" name="charity">' + 
              '<label for="ALA">American Lung Associaton</label>' + 
              '<input type="radio" id="ALA" value="American Lung Associaton" name="charity">' + 
              '<label for="AHA">American Heart Asssociation</label>' + 
              '<input type="radio"  id="AHA" value="American Heart Asssociation" name="charity">' + 
              '<label for="UNICEF">UNICEF</label>' + 
              '<input type="radio"  id="UNICEF" value="UNICEF" name="charity">' + 
        '</fieldset>' + 
        '<button data-rel="back" data-icon="ui-btn-icon-left ui-icon-back" class="ui-btn" onclick="update_charity();">Update</button>' + 
        '</form>');
            
}


