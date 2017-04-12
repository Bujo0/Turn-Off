
function extend_due_date() {

  var temp_user = JSON.parse(localStorage.current_user);
  temp_user.due_date = Date.parse(document.getElementById('extended_date').value);
  localStorage.current_user = JSON.stringify(temp_user)
  show_date()

}
